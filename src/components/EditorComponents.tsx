import Document from '@tiptap/extension-document';
import Dropcursor from '@tiptap/extension-dropcursor';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import React, { useRef, useState, useEffect } from 'react';
import { checkImageExists, deleteImage, uploadImage } from '../db/images';
import { Post } from '../db/models';
import { editPost } from '../db/posts';
import { mainUrl } from '../env';
import { FormatTitle } from '../helperfunc/formatTitle';
import SizedBox from '../common/SizedBox';
import { PlaylistButtonsComponent } from './PlaylistButtonsComponent';
import { editTutorial, publishTutorial } from '../db/tutorial';
import {  Tutorial } from '../db/models';
import { publishPost } from '../db/posts'



const EditPostEditor: React.FC<{ 
  title: string, 
  setLoading: (loading: boolean) => void, 
  post: Post 
}> =  ({ title, setLoading, post }) => {
  const [thumbnail, setThumbnail ]= useState("")
  const [images, setImages] = useState<string[]>([]) // State to track images in the editor


  useEffect(()=>{
    setThumbnail(post.thumbnail)
    // console.log("Thumbnail set in useEffect:", post.thumbnail);
  },[post])
  const onEdit = async () => {
    setLoading(true)
    var postContent = ""
    if (editor){
      postContent  = editor.getHTML()
    }

   
    // if (!title){
    //   alert("No title selected")
    //   setLoading(false)
    //   return
    // }
    if (!title){
      alert("Please Add a title")
      setLoading(false)
      return
    }
    
  const updatedPost = {
    id: post.id,
    title: FormatTitle(title)  ,
    content: postContent,
    post_url: `${mainUrl}/posts/${title}`,
    thumbnail: thumbnail
  }
  console.log(updatedPost)
     await editPost(updatedPost)
    
    setLoading(false)
    // navigate('/')
    console.log(postContent)
  };
  
  const extensions = [
    Document,
    Paragraph,
    Text,
    Image,
    Dropcursor,
    Placeholder.configure({
      placeholder: 'Type here...',
    }),
  ];

  const editor = useEditor({
    extensions,
    content: post.content, // Load initial content
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (ref: React.RefObject<HTMLInputElement>) => {
    if(!title){
      alert("add title to upload image")
      setLoading(false)
      return
    }
    ref.current?.click();
  };

  
  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, editor: Editor) => {
    
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = `images/posts/${title}/`
     const imageExist = await checkImageExists(imageUrl)
      if(imageExist){
        deleteImage(imageUrl)
      }
      const url = await uploadImage(file, imageUrl);
      // console.log(url)
     
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
        setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
      }
    }
  };

  const handleThumbnailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (thumbnail) {
        await deleteImage(thumbnail);
      }

      const imageUrl = await uploadImage(file, `images/posts/${title}/thumbnail`);
      if (!title) {
        alert("Input a title to set a thumbnail");
        return;
      }
      setThumbnail(imageUrl);
    }
  };

  const MenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className='editor-menu'>
        <button
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
              setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
            }
          }}
        >
          Add Image From URL
        </button>
        <button onClick={() => handleImageClick(imageInputRef)}>
          Upload Image
        </button>
        <input
          type="file" 
          accept="image/*"
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e, editor)}
          style={{ display: 'none' }}
        />
        <button onClick={() => handleImageClick(thumbnailInputRef)}>
          Add Thumbnail
        </button>
        <input
          type="file"
          accept="image/*"
          ref={thumbnailInputRef}
          onChange={(e) => handleThumbnailChange(e)}
          style={{ display: 'none' }}
        />
      </div>
    );
  };


// Watch for changes in the editor content to detect removed images
// TODO remember to apply the url issue changes
useEffect(() => {
  if (editor) {
    const handleUpdate = () => {
      const currentImages = Array.from(
        (editor.getJSON().content || [])
          .filter(node => node.type === 'image' && node.attrs?.src)
          .map(node => node.attrs?.src)
      );
      const removedImages = images.filter(url => !currentImages.includes(url));
      removedImages.forEach((url) =>{
        if(url.startsWith("https://firebasestorage.googleapis.com/v0/b/muhammaddev-38975.appspot.com")) {
          deleteImage(url)
        }
        }); // Delete removed images from Firebase
      setImages(currentImages);
    };
    
    editor.on('update', handleUpdate);
    
    // Return a cleanup function to remove the event listener
    return () => {
      editor.off('update', handleUpdate);
    };
  }
}, [editor, images]);
  return (
    <div>
      <MenuBar />
      <EditorContent editor={editor} />
      <button onClick={onEdit}>Update</button>
    </div>
  );
};



const EditTutorialEditor: React.FC<{ 
  title: string, 
  setLoading: (loading: boolean) => void, 
  tutorial: Tutorial 
}> = ({ title, setLoading, tutorial }) => {
  const [thumbnail, setThumbnail ]= useState("")
  const [playlistID, setPlaylistID ]= useState("")
  const [youtubeLink, setYoutubeLink ]= useState("")

  const [images, setImages] = useState<string[]>([]) // State to track images in the editor


  useEffect(()=>{
    setThumbnail(tutorial.thumbnail)
    setYoutubeLink(tutorial.youtube_link)
    setPlaylistID(tutorial.playlist_id)
    // console.log("Thumbnail set in useEffect:", post.thumbnail);
  },[tutorial])
  const onEdit = async () => {
    setLoading(true)
    var tutorialDescription = ""
    if (editor){
      tutorialDescription  = editor.getHTML()
    }

   
    // if (!title){
    //   alert("No title selected")
    //   setLoading(false)
    //   return
    // }
    if (!title) {
      alert("Please Add a title")
      setLoading(false)
      return
    }
    if(!youtubeLink){
      alert("You must add youtube link to upload tutorial")
      setLoading(false)
      return
    }
    if(!thumbnail){
      alert("You must add Thumbnail to upload tutorial")
      setLoading(false)
      return
    }
    
  const updatedTutorial = {
    id: tutorial.id,
    title: FormatTitle(title)  ,
    description: tutorialDescription,
    tutorial_url: `${mainUrl}/tutorials/${title}`,
    thumbnail: thumbnail,
    youtube_link: youtubeLink,
    playlist_id: tutorial.playlist_id
  }
  console.log(updatedTutorial)
     await editTutorial(updatedTutorial)
    
    setLoading(false)
    // navigate('/')
   
  };
  
  const extensions = [
    Document,
    Paragraph,
    Text,
    Image,
    Dropcursor,
    Placeholder.configure({
      placeholder: 'Type here...',
    }),
  ];

  const editor = useEditor({
    extensions,
    content: tutorial.description, // Load initial content
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (ref: React.RefObject<HTMLInputElement>) => {
    if(!title){
      alert("add title to upload image")
      setLoading(false)
      return
    }
    ref.current?.click();
  };

  
  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, editor: Editor) => {
    
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = `images/posts/${title}/`
     const imageExist = await checkImageExists(imageUrl)
      if(imageExist){
        deleteImage(imageUrl)
      }
      const url = await uploadImage(file, imageUrl);
      // console.log(url)
     
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
        setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
      }
    }
  };

  const handleThumbnailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (thumbnail) {
        await deleteImage(thumbnail);
      }

      const imageUrl = await uploadImage(file, `images/posts/${title}/thumbnail`);
      if (!title) {
        alert("Input a title to set a thumbnail");
        return;
      }
      setThumbnail(imageUrl);
    }
  };


  
  const MenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className='editor-menu'>
        <button
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
              setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
            }
          }}
        >
          Add Image From URL
        </button>
        <button onClick={() => handleImageClick(imageInputRef)}>
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e, editor)}
          style={{ display: 'none' }}
        />
        <button onClick={() => handleImageClick(thumbnailInputRef)}>
          Add Thumbnail
        </button>
       
        <input
          type="file"
          accept="image/*"
          ref={thumbnailInputRef}
          onChange={(e) => handleThumbnailChange(e)}
          style={{ display: 'none' }}
        />
         <button
          onClick={() => {
            const url = window.prompt('URL');
          if(url){
          setYoutubeLink(url)
          }
           
          }}
        >
         Add Youtube Link
        </button>
        <PlaylistButtonsComponent setPlaylistId={setPlaylistID} playlistID={playlistID} /> 

      </div>
    );
  };



// Watch for changes in the editor content to detect removed images
// TODO remember to apply the url issue changes
useEffect(() => {
  if (editor) {
    const handleUpdate = () => {
      const currentImages = Array.from(
        (editor.getJSON().content || [])
          .filter(node => node.type === 'image' && node.attrs?.src)
          .map(node => node.attrs?.src)
      );
      const removedImages = images.filter(url => !currentImages.includes(url));
      removedImages.forEach((url) =>{
        if(url.startsWith("https://firebasestorage.googleapis.com/v0/b/muhammaddev-38975.appspot.com")) {
          deleteImage(url)
        }
        }); // Delete removed images from Firebase
      setImages(currentImages);
    };
    
    editor.on('update', handleUpdate);
    
    // Return a cleanup function to remove the event listener
    return () => {
      editor.off('update', handleUpdate);
    };
  }
}, [editor, images]);
  return (
    <div>
      <MenuBar />
      <SizedBox height={100} />
      <EditorContent editor={editor} />
      <button onClick={onEdit}>Update</button>

    </div>
  );
};



const PublishPostEditor: React.FC<{ title: string, setLoading: (loading: boolean) => void , userAccessToken:string}> = ({ title, setLoading , userAccessToken}) => {
  const [thumbnail, setThumbnail] = useState("")
  const [images, setImages] = useState<string[]>([]) // State to track images in the editor

  const extensions = [
    Document,
    Paragraph,
    Text,
    Image,
    Dropcursor,
    Placeholder.configure({
      placeholder: 'Type here...',
    })
  ];

  const editor = useEditor({
    extensions,
    content: ''
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (ref: React.RefObject<HTMLInputElement>) => {
    if(!title){
      alert("add title to upload image")
      setLoading(false)
      return
    }
    ref.current?.click();
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, editor: Editor) => {
    
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = `images/posts/${title}/`
     const imageExist = await checkImageExists(imageUrl)
      if(imageExist){
        deleteImage(imageUrl)
      }
      const url = await uploadImage(file, imageUrl);
      // console.log(url)
     
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
        setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
      }
    }
  };

  const handleThumbnailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (thumbnail) {
        await deleteImage(thumbnail);
      }
      const imageUrl = await uploadImage(file, `images/posts/${title}/thumbnail`);
      if (!title) {
        alert("Input a title to set a thumbnail");
        return;
      }
      setThumbnail(imageUrl);
    }
  };

  const MenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className='editor-menu'>
        <button
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
              setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
            }
          }}
        >
          Add Image From URL
        </button>
        <button onClick={() => handleImageClick(imageInputRef)}>
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e, editor)}
          style={{ display: 'none' }}
        />
        <button onClick={() => handleImageClick(thumbnailInputRef)}>
          Add Thumbnail
        </button>
        <input
          type="file"
          accept="image/*"
          ref={thumbnailInputRef}
          onChange={(e) => handleThumbnailChange(e)}
          style={{ display: 'none' }}
        />
      </div>
    );
  };

  const onPublish = async (title: string) => {
    try {
      setLoading(true)
    var postContent = ""
    if (editor) {
      postContent = editor.getHTML()
    }

    if (!title) {
      alert("Please Add a title")
      setLoading(false)
      return
    }

    await publishPost({
      id: "",
      title: FormatTitle(title),
      content: postContent,
      post_url: `${mainUrl}/posts/${title}`,
      thumbnail: thumbnail
    }, userAccessToken)

    setLoading(false)
    console.log(postContent)
    } catch(e){
      console.log(e)
      return
    }
    
  }

  // Watch for changes in the editor content to detect removed images
  useEffect(() => {
    if (editor) {
      const handleUpdate = () => {
        const currentImages = Array.from(
          (editor.getJSON().content || [])
            .filter(node => node.type === 'image' && node.attrs?.src)
            .map(node => node.attrs?.src)
        );
        const removedImages = images.filter(url => !currentImages.includes(url));
        removedImages.forEach((url) =>{
          if(url.startsWith("https://firebasestorage.googleapis.com/v0/b/muhammaddev-38975.appspot.com")) {
            deleteImage(url)
          }
          }); // Delete removed images from Firebase
        setImages(currentImages);
      };
      
      editor.on('update', handleUpdate);
      
      // Return a cleanup function to remove the event listener
      return () => {
        editor.off('update', handleUpdate);
      };
    }
  }, [editor, images]);
  
  return (
    <div>
      <MenuBar />
      <EditorContent editor={editor} />
      <button onClick={() => onPublish(title)}>Publish</button>
      {/* <button
      onClick={()=>{
        console.log(apiUrl)
      }}
      >Test</button> */}
    </div>
  );
};



const PublishTutorialEditor: React.FC<{ title: string, setLoading: (loading: boolean) => void }> = ({ title, setLoading }) => {
  const [thumbnail, setThumbnail] = useState("")
  const [youtubeLink, setYoutubeLink] = useState("")
  const [playlistID, setPlaylistID] = useState("")
  const [images, setImages] = useState<string[]>([]) // State to track images in the editor

  const extensions = [
    Document,
    Paragraph,
    Text,
    Image,
    Dropcursor,
    Placeholder.configure({
      placeholder: 'Type here...',
    })
  ];

  const editor = useEditor({
    extensions,
    content: ''
  });

  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (ref: React.RefObject<HTMLInputElement>) => {
    if(!title){
      alert("add title to upload image")
      setLoading(false)
      return
    }
    ref.current?.click();
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, editor: Editor) => {
    
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = `images/posts/${title}/`
     const imageExist = await checkImageExists(imageUrl)
      if(imageExist){
        deleteImage(imageUrl)
      }
      const url = await uploadImage(file, imageUrl);
      // console.log(url)
     
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
        setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
      }
    }
  };

  const handleThumbnailChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (thumbnail) {
        await deleteImage(thumbnail);
      }
      const imageUrl = await uploadImage(file, `images/posts/${title}/thumbnail`);
      if (!title) {
        alert("Input a title to set a thumbnail");
        return;
      }
      setThumbnail(imageUrl);
    }
  };

  const MenuBar = () => {
    if (!editor) {
      return null;
    }

    return (
      <div className='editor-menu'>
        <button
          onClick={() => {
            const url = window.prompt('URL');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
              setImages(prevImages => [...prevImages, url]); // Add the image URL to the state
            }
          }}
        >
          Add Image From URL
        </button>
        <button onClick={() => handleImageClick(imageInputRef)}>
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e, editor)}
          style={{ display: 'none' }}
        />
        <button onClick={() => handleImageClick(thumbnailInputRef)}>
          Add Thumbnail
        </button>
       
        <input
          type="file"
          accept="image/*"
          ref={thumbnailInputRef}
          onChange={(e) => handleThumbnailChange(e)}
          style={{ display: 'none' }}
        />
         <button
          onClick={() => {
            const url = window.prompt('URL');
          if(url){
          setYoutubeLink(url)
          }
           
          }}
        >
         Add Youtube Link
        </button>
        <PlaylistButtonsComponent  setPlaylistId={setPlaylistID} playlistID={playlistID} /> 
      </div>
    );
  };

  const onPublish = async (title: string,) => {
    
    setLoading(true)
    var tutorialContent = ""
    if (editor) {
      tutorialContent = editor.getHTML()
    }

    if (!title) {
      alert("Please Add a title")
      setLoading(false)
      return
    }
    if(!youtubeLink){
      alert("You must add youtube link to upload tutorial")
      setLoading(false)
      return
    }
    if(!thumbnail){
      alert("You must add Thumbnail to upload tutorial")
      setLoading(false)
      return
    }

    await publishTutorial({
      id: "",
      title:FormatTitle(title),
      description: tutorialContent,
      tutorial_url: `${mainUrl}/tutorials/${title}`,
      thumbnail: thumbnail,
      playlist_id: playlistID,
      youtube_link: youtubeLink
    })

    setLoading(false)
    console.log(tutorialContent)
  }

  // Watch for changes in the editor content to detect removed images
  useEffect(() => {
    if (editor) {
      const handleUpdate = () => {
        const currentImages = Array.from(
          (editor.getJSON().content || [])
            .filter(node => node.type === 'image' && node.attrs?.src)
            .map(node => node.attrs?.src)
        );
        const removedImages = images.filter(url => !currentImages.includes(url));
        removedImages.forEach((url) =>{
          if(url.startsWith("https://firebasestorage.googleapis.com/v0/b/muhammaddev-38975.appspot.com")) {
            deleteImage(url)
          }
          }); // Delete removed images from Firebase
        setImages(currentImages);
      };
      
      editor.on('update', handleUpdate);
      
      // Return a cleanup function to remove the event listener
      return () => {
        editor.off('update', handleUpdate);
      };
    }
  }, [editor, images]);
  
  return (
    <div>
      <MenuBar />
      <EditorContent editor={editor} />
      <button onClick={() => onPublish(title)}>Publish</button>
      
    </div>
  );
};



export { EditPostEditor,EditTutorialEditor,PublishPostEditor,PublishTutorialEditor };

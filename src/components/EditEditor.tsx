import '../css/tiptap.css'
import Document from '@tiptap/extension-document'
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'

import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import { Editor, EditorContent, useEditor } from '@tiptap/react'
import React, { useRef, useState,useEffect } from 'react'
import { deleteImage, uploadImage } from '../db/images'
import { Post } from '../models'
import { editPost, publishPost } from '../db/posts'
import { mainUrl } from '../env'
import { EditPost } from '../views/EditPostPage'

const EditEditor:  React.FC<{ title: string, setLoading:  (loading: boolean) => void, post:Post
    }> = ({ title, setLoading, post }) => {
 
 const [thumbnail, setThumbnail ]= useState("")


//  useEffect(()=>{
//   setThumbnail(getThumbnail)
//  }, [getThumbnail])



     const content = `
  
`;



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
  const editor = useEditor(
    {
      extensions, content
    }
  );
   


  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (ref:React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, editor: Editor) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = await uploadImage(file, `images/posts/${title}`);
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    }
  };

  const handleThumbnailChange =  (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(thumbnail){
      deleteImage(thumbnail)
    }
    
   
    const file = event.target.files?.[0];

   if(file){ 

      uploadImage(file,  `images/posts/${title}/thumbnail`).then((imageUrl)=>{
        if (!title){
          alert("Input a title to set a thumbnail")
          return 
        }
        setThumbnail(imageUrl)
        

      }).catch((e)=>{
        console.log(e)
        throw(e)
      })

  }
   
  }


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
            }
          }}
        >
          Add Image From URL
        </button>
        <button onClick={()=>{handleImageClick( imageInputRef)}}>
          Upload Image
        </button>
        <input
          type="file"
          accept="image/*"
          ref={imageInputRef}
          onChange={(e) => handleImageChange(e, editor)}
          style={{ display: 'none' }}

        />
        
        <button onClick={()=>{handleImageClick( thumbnailInputRef)}}>
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

 
  const onEdit = async () => {
    setLoading(true)
    var postContent = ""
    if (editor){
      postContent  = editor.getHTML()
    }
   const  updatedPost:Post =   {
      id: post.id,
      title: post.title,
      content : postContent, 
      post_url: post.post_url,
      thumbnail: post.thumbnail
    
    }
   
  
    await editPost(updatedPost)
    
    setLoading(false)
    // navigate('/')
    console.log(postContent)
  }
  

  return (
    <div>
      <MenuBar />
       <EditorContent editor={editor} />
       <button onClick={onEdit}>Update</button>

    </div>
  );
};



export{EditEditor}
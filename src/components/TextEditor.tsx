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
import { publishPost } from '../db/posts'

const TextEditor: React.FC<{ post: Post, setEditor: (editor: Editor) => void, setLoading: (loading: boolean) => void, setThumbnail: (thumbnail: string) => void,thumbnail: string }> = ({ post, setEditor,setThumbnail,thumbnail, setLoading }) => {
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

  useEffect(() => {
    if (editor) {
      setEditor(editor);
      
    }
  }, [editor, setEditor]);


  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = (ref:React.RefObject<HTMLInputElement>) => {
    ref.current?.click();
  };

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>, editor: Editor) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = await uploadImage(file, `images/posts/${post.title}`);
      if (editor && url) {
        editor.chain().focus().setImage({ src: url }).run();
      }
    }
  };

  const handleThumbnailChange = async (event: React.ChangeEvent<HTMLInputElement>) =>{
    if(thumbnail){
      deleteImage(thumbnail)
    }
    const file = event.target.files?.[0];

   if(file){ 

   const imageUrl  =await uploadImage(file,  `images/posts/thumbnail`)
   setThumbnail(imageUrl)
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

 
  const onPublish = async (post: Post) => {
    setLoading(true)
    var postContent = ""
    if (editor){
      postContent  = editor.getHTML()
    }
  
    await publishPost({
      id: "",
      title: post.title,
      content: postContent,
      post_url: post.post_url,
      thumbnail: thumbnail
    })
    
    setLoading(false)
    // navigate('/')
    console.log(postContent)
  }
  

  return (
    <div>
      <MenuBar />
       <EditorContent editor={editor} />
       <button onClick={()=> onPublish(post)}>Publish</button>

    </div>
  );
};



export{TextEditor}
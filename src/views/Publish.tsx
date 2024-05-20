import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Post } from '../models'
import { apiUrl } from '../env'
import { publishPost } from '../db/posts'
import { uploadImage } from '../db/images'
import { TextEditor } from '../components/TextEditor'
import { Editor, useCurrentEditor } from '@tiptap/react'
// import { replacePlaceholdersWithImages } from '../helperfunc/HelperFuncs'


type Props = {}

const Publish = (props: Props) => {
  const [title, setTitle] = useState("")
  const [thumbnail, setThumbnail] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  // I use a empty string for the post content since i will get it from the post editor
  const post = { id: "", title: title, content: "content", post_url: `${apiUrl}/posts/${title}`, thumbnail:thumbnail }
  const [editor, setEditor] = useState<Editor>()
  
 
 


  return (
    loading ? <p>Loading...</p> :
    (
      <div className="publish-page">
       <textarea id='title-input'  placeholder='Title' onChange={e => setTitle(e.target.value)} />
        
       
        <TextEditor post={post} setEditor={setEditor} thumbnail={thumbnail} setThumbnail={setThumbnail}  setLoading={setLoading}/>
        <input type="file"  />
<br></br>
        
      </div>
    )
  )
}

export { Publish }



import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Post } from '../models'
import { apiUrl } from '../env'
import { publishPost } from '../db/posts'
import { uploadImage } from '../db/images'

type Props = {}

const Publish = (props: Props) => {
  const imagePlaceholder = "vxwqaqwydjlfosfgdjjdggaghdjanimageishere"
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  
  const onPublish = async (post: Post) => {
    setLoading(true)
   
    await publishPost({
      id: "",
      title: post.title,
      content: post.content,
      post_url: post.post_url
    })
    
    setLoading(false)
    navigate('/')
    console.log(post.content)
  }
  
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];
      const imageUrl = await uploadImage(image, `posts/${title}`);
      const contentInput = document.getElementById("contentInput") as HTMLInputElement;
      const cursorPosition = contentInput.selectionStart ?? 0; // Use 0 if selectionStart is null
      const newContent = content.slice(0, cursorPosition) + `${imagePlaceholder + imageUrl + Date.now()}` + content.slice(cursorPosition);
      setContent(newContent);
    }
  };
  

  const handleContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value)
  }

  return (
    loading ? <p>Loading...</p> :
    (
      <div className="publish-page">
        <input className='title-input' type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} />
        <div className="content-input">
          <input id="contentInput" type="text" placeholder='Type here....' onChange={handleContentChange} value={content} />
        </div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={e => onPublish({ id: "", title: title, content: content, post_url: `${apiUrl}/posts/${title}` })}>Publish</button>
      </div>
    )
  )
}

export { Publish }
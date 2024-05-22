import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { Post } from '../models'
import { apiUrl, mainUrl } from '../env'
import { publishPost } from '../db/posts'
import { uploadImage } from '../db/images'
import { PublishPostEditor } from '../components/PublishPostEditor'
import { PublishTutorialEditor } from '../components/PublishTutorialEditor'
// import { replacePlaceholdersWithImages } from '../helperfunc/HelperFuncs'


type Props = {}

const PublishTutorialPage = (props: Props) => {
  const [title, setTitle] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  // I use a empty string for the post content since i will get it from the post editor

  
 


  return (
    loading ? <p>Loading...</p> :
    (
      <div className="publish-page">
       <textarea id='title-input'  placeholder='Title' onChange={e => setTitle(e.target.value)} />
        
       
        <PublishTutorialEditor 
        title={title}
        setLoading={setLoading}/>
        <input type="file"  />
<br></br>
        
      </div>
    )
  )
}

export { PublishTutorialPage  }



import React, {  useState } from 'react'

// import { useNavigate } from 'react-router'

import { PublishPostEditor } from '../components/PublishPostEditor'
// import { replacePlaceholdersWithImages } from '../helperfunc/HelperFuncs'


type Props = {}

const PublishPostPage = (props: Props) => {
  const [title, setTitle] = useState("")
  // const navigate = useNavigate()
  const [loading, setLoading] = useState<boolean>(false);
  // I use a empty string for the post content since i will get it from the post editor

  
 


  return (
    loading ? <p>Loading...</p> :
    (
      <div className="publish-page">
       <textarea id='title-input'  placeholder='Title' onChange={e => setTitle(e.target.value)} />
        
       
        <PublishPostEditor 
        title={title}
        setLoading={setLoading}/>
        
<br></br>
        
      </div>
    )
  )
}

export { PublishPostPage  }



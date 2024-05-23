import '../css/cards.css'

import React from 'react';
import placeholder from '../images/placeholder.png'; // Import the placeholder image
import { ThreeDotButton } from './ThreeDotsButton';
import { ContentsType } from '../common/ContentsType';
import { useNavigate } from 'react-router';
import SizedBox from '../common/SizedBox';


const ContentCard: React.FC<{ contentsType:string, contentId:string, contentTitle:string, contentThumbnail:string }>= ({contentsType, contentId, contentTitle, contentThumbnail})=> {
  
  var   thumbnail = ""
  if (contentThumbnail===""){
   thumbnail= placeholder
  }
  if(contentThumbnail !==""){
   thumbnail = contentThumbnail
  }
  var contentType = ""
  if (contentsType=="tutorials"){
    contentType = "Tutorial"
  }
  if (contentsType=="posts"){
    contentType = "Post"
  }
const navigate = useNavigate()
  
 
  return (
    <div className="content-card" >
   
      <div className="content-options">
      <ThreeDotButton contentType={contentType} contentId={contentId}  />
      </div>
      <div onClick={()=>navigate(`/${contentsType}/${encodeURIComponent(contentTitle)}`)}>
     


     <div className='contentThumbnail' >
     
    
     <img src={thumbnail} alt="Placeholder Image" />
    
    
     </div>
     <SizedBox height={30}/>
      <h2>{contentTitle}</h2>
      </div>
      {/* <p>{  getPreviewContent(post.content,  50)}</p> */}
    </div>
  );
};

  function Contents ({ loading, contents, contentsType }: { loading: boolean; contents: ContentsType[], contentsType:string }) {
   
 return   <div className="contents-container">

     
    {
    loading? (<p>Loading...</p>):contents.length > 0 ?( contents.map((content) => (
    
     
     
      <ContentCard key={content.id} contentsType={contentsType.toLowerCase()} contentId={content.id} contentTitle={content.title} contentThumbnail={content.thumbnail} />
   
    ))) : (
      <p>No {contentsType} available</p>
    )
  
    }
  </div>
  }

  export{Contents}

import React from 'react';
import { Tutorial } from '../models';
import '../css/cards.css'

import placeholder from '../images/placeholder.png'; // Import the placeholder image
import { ThreeDotButton } from './ThreeDotsButton';



const TutorialCard: React.FC<{ tutorial: Tutorial }> = ({ tutorial }) => {
   var   thumbnail = ""
   if (tutorial.thumbnail==""){
    thumbnail= placeholder
   }
   if(tutorial.thumbnail !=""){
    thumbnail = tutorial.thumbnail
   }
   
      return (
        <div className="post-card">
          <ThreeDotButton contentId={tutorial.id} contentType='Tutorial' />
         <div className='postThumbnail'>
    
         <img src={thumbnail} alt="Placeholder Image" />
    
         </div>
          <h2>{tutorial.title}</h2>
          
          {/* <p>{  getPreviewContent(post.content,  50)}</p> */}
        </div>
    );
  };

  function Tutorials ({ loading, tutorials }: { loading: boolean; tutorials: Tutorial[] }) {
 return   <div className="tutorials-container">
     
    {
    loading? (<p>Loading...</p>):tutorials.length > 0 ?( tutorials.map((tutorial) => (
      <TutorialCard key={tutorial.id} tutorial={tutorial} />
    ))) : (
      <p>No tutorials available</p>
    )
  
    }
  </div>
  }

  export{Tutorials}
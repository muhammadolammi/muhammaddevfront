
import React from 'react';
import placeholder from '../images/placeholder.png'; 
import videoPlaceholder from '../images/videoplaceholder.png';
import { ContentsType } from '../common/ContentsType';

import { useNavigate } from 'react-router';
import SizedBox from '../common/SizedBox';
import { ReFormatTitle } from '../helperfunc/formatTitle';
import { Post, Tutorial } from '../db/models';
import { getPreviewContent } from '../helperfunc/getPreviewContent';
import { PlayCircleIcon } from '@heroicons/react/24/solid';



const TutorialCard: React.FC<{   tutorial:Tutorial }>= ({tutorial})=> {
  
  var   thumbnail = ""
 if (tutorial.thumbnail===""){
  thumbnail= videoPlaceholder
 }
 if(tutorial.thumbnail !==""){
  thumbnail = tutorial.thumbnail
 }

const navigate = useNavigate()
 

 return (
  <div className='text-white container block w-[280px] p-[20px] bg-[#131313]'>
   <div className='relative flex justify-center items-center '>
   <img src={thumbnail} alt="" />
   <PlayCircleIcon className='absolute h-12 w-12 stroke-white fill-transparent  '/>

   
   </div>
  
   <p className='mt-[10px]'>{tutorial.title}</p>
   
  </div>
 );
};



const PostCard: React.FC<{ post:Post, }>= ({post})=> {
  
  var   thumbnail = ""
  if (post.thumbnail===""){
   thumbnail= placeholder
  }
  if(post.thumbnail !==""){
   thumbnail = post.thumbnail
  }

const navigate = useNavigate()
  
 
  return (
    <div className='m-auto py-2 mb-[50px]   bg-[#131313] overflow-hidden'>
      
      <img src={thumbnail} alt="" className='relative w-[275px] h-[170px] m-auto'/>

 <p className=' w-full mt-[15px] ml-[10px] font-bold font-poppins text-[#F0F2F5]  text-sm '>{post.title}</p>

<p className=' mt-[15px] ml-[10px]   font-medium  text-wrap font-poppins text-[#606060] text-left text-sm '>{getPreviewContent(post.content, 30)}</p>


<p className=' mt-[20px] ml-[10px] font-thin font-poppins text-[#606060]  text-sm ' onClick={()=>{
  navigate(`/posts/${post.title}`)
}}>View Post</p>

  </div>
  
  );
};

  function TutorialsComponent ({ loading, tutorials }: { loading: boolean; tutorials: Tutorial[],  }) {
   
 return   <div className="mt-[20px]  ">

     
    {
    loading? (<p>Loading...</p>):tutorials.length > 0 ?( tutorials.map((tutorial) => (
    
     
      <TutorialCard key={tutorial.id}  tutorial={tutorial}  />
   
    ))) : (
      <p>No Tutorial available</p>
    )
  
    }
  </div>
  }

  
  function PostsComponent ({ loading, posts }: { loading: boolean; posts: Post[],  }) {
   
    return   <div className=" mt-[20px]      md:flex">
   
        
       {
       loading? (<p>Loading...</p>):posts.length > 0 ?( posts.map((post) => (
       
        
         <PostCard key={post.id}   post={post}  />
      
       ))) : (
         <p>No Posts available</p>
       )
     
       }
     </div>
     }

  export{TutorialsComponent, PostsComponent}
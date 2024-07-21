
import React from 'react';
import placeholder from '../assets/images/placeholder.png'; 
import videoPlaceholder from '../assets/images/videoplaceholder.png';

import { useNavigate } from 'react-router';
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
   <PlayCircleIcon className='absolute size-12 stroke-white fill-transparent  '/>

   
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
    <div className='m-auto py-2 mb-[50px]  md:w-[300px] md:h-[400px] bg-[#131313] overflow-hidden'>
      
      <img src={thumbnail} alt="" className='relative w-[275px] h-[170px] m-auto'/>

 <p className=' w-full mt-[15px] ml-[10px] md:h-[50px] font-bold font-poppins text-[#F0F2F5]  text-sm overflow-hidden '>{post.title}</p>

<p className=' mt-[15px] ml-[10px] md:h-[100px]  font-medium  text-wrap font-poppins text-[#606060] text-left text-sm  overflow-hidden'>{getPreviewContent(post.content, 30)}</p>


<p className=' mt-[10px] ml-[10px] font-thin font-poppins text-[#606060]  text-sm ' onClick={()=>{
  navigate(`/posts/${post.title}`)
}}>View Post</p>

  </div>
  
  );
};

  function TutorialsComponent ({ loading, tutorials }: { loading: boolean; tutorials: Tutorial[],  }) {
   
 return   <div className="mt-[20px] flex flex-wrap gap-y-5 md:flex md:flex-wrap md:gap-y-5 ">

     
    {
    loading? (<p>Loading...</p>):tutorials.length > 0 ?( tutorials.map((tutorial) => (
    
     
      <TutorialCard key={tutorial.id}  tutorial={tutorial}  />
   
    ))) : (
      <p className='text-center container'>No Tutorial available</p>
    )
  
    }
  </div>
  }

  
  function PostsComponent ({ loading, posts }: { loading: boolean; posts: Post[],  }) {
   
    return   <div className=" mt-[20px]  md:flex md:flex-wrap ">
   
        
       {
       loading? (<p>Loading...</p>):posts.length > 0 ?( posts.map((post) => (
       
        
         <PostCard key={post.id}   post={post}  />
      
       ))) : (
         <p className='text-center container'>No Posts available</p>
       )
     
       }
     </div>
     }

  export{TutorialsComponent, PostsComponent}
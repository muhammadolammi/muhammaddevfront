import '../css/cards.css'

import React, { useState } from 'react';
import { Post } from '../models';
import placeholder from '../images/placeholder.png'; // Import the placeholder image
import { ThreeDotButton } from './ThreeDotsButton';


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  var   thumbnail = ""
  if (post.thumbnail==""){
   thumbnail= placeholder
  }
  if(post.thumbnail !=""){
   thumbnail = post.thumbnail
  }
 
  return (
    <div className="post-card">
      <div className="post-options">
      <ThreeDotButton contentType='Post' contentId={post.id}  />
      </div>
     <div className='postThumbnail'>
     
     
     <img src={thumbnail} alt="Placeholder Image" />
    
    
     </div>
      <h2>{post.title}</h2>
      
      {/* <p>{  getPreviewContent(post.content,  50)}</p> */}
    </div>
  );
};

  function Posts ({ loading, posts }: { loading: boolean; posts: Post[] }) {
 return   <div className="posts-container">
     
    {
    loading? (<p>Loading...</p>):posts.length > 0 ?( posts.map((post) => (
     
      <PostCard key={post.id} post={post} />
    ))) : (
      <p>No posts available</p>
    )
  
    }
  </div>
  }

  export{Posts}
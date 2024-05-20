
import React from 'react';
import { Post } from '../models';
import { getPreviewContent } from '../helperfunc/getpostpreview';


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className="post-card">
     
      <h2>{post.title}</h2>
      <p>{  getPreviewContent(post.content, 50)}</p>
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
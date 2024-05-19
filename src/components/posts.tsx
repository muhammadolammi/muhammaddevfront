
import React from 'react';
import { Post } from '../models';


const PostCard: React.FC<{ post: Post }> = ({ post }) => {
    return (
      <div className="post-card">
       
        <h2>{post.title}</h2>
        <p>{post.content}</p>
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
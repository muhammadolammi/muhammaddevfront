

import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { PostsComponent } from '../components/ContentsComponent';
import { fetchPosts } from '../db/posts';

import NavBar from '../common/NavBar';
import {  Post } from '../db/models';


type Props = {}

const PostsPage = (props: Props) => {
   

    const [posts, setPosts] = useState<Post[]>([]);

    const [loading , setLoading] = useState<boolean>(false);
   

    //getAndSetcontentswith effect.
    useEffect(()=>{
      const fectContents =()=>{
       
          fetchPosts().then((postsData)=>{
            setPosts(postsData)
           }).catch((e)=>{
            throw(e)
           })}
      
        
     setLoading(true)
      fectContents()
    setLoading(false)
    },[])
   
  

        return(
         
       <> 
       <NavBar/>

       <div className='Contents-Page'>
       
           <div className="contentsTitle">
            <h1>Posts</h1>
        </div>


       <PostsComponent  posts={posts}  loading={loading} />
      
      </div>  
      </> 
        )
   
}

export default PostsPage
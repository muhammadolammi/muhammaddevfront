import React from 'react';
import '../css/homepage.css'

import { fetchTutorials } from '../db/tutorial';
import { useState , useEffect} from 'react';
import { Post, Tutorial } from '../models';
import { fetchPosts } from '../db/posts';
import { Contents } from '../components/Contents';
import SizedBox from '../common/SizedBox';
import NavBar from '../common/NavBar';
// import{Tutorial} from './models';

const HomePage =() => {
   const [tutorials, setTutorials] = useState<Tutorial[]>([])
   const [posts, setPosts] = useState<Post[]>([])

   const [loading, setLoading] = useState<boolean>(true);

  

   useEffect(()=>{
    //get tutorials func
    const getTutorials = async () => {
      try {
        const tutorialList = await fetchTutorials();
        console.log(tutorialList); // Check what tutorialList contains
        setTutorials(tutorialList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    //get posts func
    const getPosts = async () => {
      try {
        const postList = await fetchPosts();
        console.log(postList); // Check what tutorialList contains
        setPosts(postList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    getTutorials();
    getPosts();
   },[])

  
  
   return (
    <div className="Homepage">
    <NavBar />
      <div className="Body">
      <div className="contentsTitle">
            <h1>Tutorials</h1>
        </div>
       <Contents loading={loading} contents={tutorials} contentsType='Tutorials'/>
     <SizedBox  height={100}/>
       <div className="contentsTitle">
            <h1>Posts</h1>
        </div>
   
        <Contents loading={loading} contents={posts} contentsType='Posts'/>

      </div>
    </div>
  );
}

export { HomePage};




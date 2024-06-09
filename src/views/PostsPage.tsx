

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { ContentsComponent } from '../components/ContentsComponent';
import { fetchTutorials } from '../db/tutorial';
import { fetchPosts } from '../db/posts';
import '../css/contentsPage.css'

import NavBar from '../common/NavBar';
import {F404Page} from '../common/F404Page';
import { Playlist, Post, Tutorial } from '../db/models';
import {PlaylistBar} from '../common/PlaylistBar';
import SizedBox from '../common/SizedBox';
import { fetchPlaylists } from '../db/playlist';
import { apiUrl } from '../env';

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
      
        
  
      fectContents()
    
    },[])
   
  

        return(
         
       <> 
       <NavBar/>

       <div className='Contents-Page'>
        <button
        onClick={
          ()=>{
            console.log(apiUrl)
          }
        }
        >
          TEST
        </button>
           <div className="contentsTitle">
            <h1>Posts</h1>
        </div>


       <ContentsComponent contentsType="Posts" contents={posts}  loading={loading} />
      
      </div>  
      </> 
        )
   
}

export default PostsPage
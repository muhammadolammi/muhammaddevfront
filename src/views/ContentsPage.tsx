

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Contents } from '../components/Contents';
import { fetchTutorials } from '../db/tutorial';
import { fetchPosts } from '../db/posts';
import '../css/contentsPage.css'

import { ContentsType } from '../common/ContentsType';
import NavBar from '../common/NavBar';
import {F404Page} from '../common/F404Page';
import { Playlist, Post, Tutorial } from '../models';
import PlaylistBar from '../common/PlaylistBar';

type Props = {}

const ContentsPage = (props: Props) => {
    const {contentsType} = useParams<{contentsType:string}>();
    const [tutorials, setTutorials] = useState<Tutorial[]>([]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);

    const [loading , setLoading] = useState<boolean>(false);
   

    //getAndSetcontentswith effect.
    useEffect(()=>{
      const fectContents =()=>{
          //  get tutorials
          if(contentsType ==="tutorials"){
            fetchTutorials().then((tutorialsData)=>{
            //  setLoading(true)
         
             setTutorials(tutorialsData )
             setLoading(false)
            }).catch((e)=>{
            //  setLoading(false)
             throw(e)
            })}
        // get Posts
        if(contentsType ==="posts"){
          fetchPosts().then((postsData)=>{
            setLoading(true)
            setPosts(postsData)
            setLoading(false)
           }).catch((e)=>{
            throw(e)
           })}
      }
        
  
      fectContents()
    
    },[])
   
    // Hanlde to Tutorials
  if (contentsType=="tutorials") {
      return(
      <>
      <NavBar/>
      <div className='Contents-Page'>
      <PlaylistBar playlists={playlists} />
                 <div className="contentsTitle">
            <h1>Tutorials</h1>
        </div>
     <Contents contentsType="Tutorials" contents={tutorials}  loading={loading} />
        </div>
        </>
      )
    }
    if (contentsType=="posts") {

        return(
         
       <> 
       <NavBar/>
       <div className='Contents-Page'>
           <div className="contentsTitle">
            <h1>Posts</h1>
        </div>


       <Contents contentsType="Posts" contents={posts}  loading={loading} />
      
      </div>  
      </> 
        )
      }
    
  return (
    <F404Page />
  )
}

export default ContentsPage
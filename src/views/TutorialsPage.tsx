

import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { ContentsComponent } from '../components/ContentsComponent';
import {  fetchTutorialsFromPlaylist } from '../db/tutorial';

import NavBar from '../common/NavBar';
import { Playlist,  Tutorial } from '../db/models';
import {PlaylistBar} from '../common/PlaylistBar';
import SizedBox from '../common/SizedBox';
import { fetchPlaylists, getPlaylistWithName } from '../db/playlist';
import {  DefaultPlaylistName } from '../consts/consts';

type Props = {}

const TutorialsPage =  (props: Props) => {
    const location = useLocation();
    const playlist:string = location.search.split('=')[1];

    const [tutorials, setTutorials] = useState<Tutorial[]>([]);
    const [playlists, setPlaylists] = useState<Playlist[]>([]);
    const [currentPlaylist, setCurrentPlaylist]= useState<Playlist>(
        {
            id:"", name:""
        }
    )

    const [loading , setLoading] = useState<boolean>(false);
   
    //   TODO get tutorial playlist, and set a default playlist
    //getAndSetcontentswith effect.
    useEffect(()=>{
      
      const fectContents =()=>{
        getPlaylistWithName(playlist??DefaultPlaylistName).then((playlistData)=>{
          setCurrentPlaylist(playlistData)
          fetchPlaylists().then((playlists)=>{
            setPlaylists(playlists)
          }).catch((e)=>{
            console.log(e)
          }).catch((e)=>{
            console.log(e)
          })

        
        
        })
    }
    setLoading(true)
    fectContents()
    setLoading(false)
  },[playlist, ])

  useEffect(()=>{
    if(currentPlaylist.id!==""){
      fetchTutorialsFromPlaylist(currentPlaylist.id).then((tutorials)=>{

        setTutorials(tutorials)
      })
     }
  }, [currentPlaylist])

   
    // Hanlde to Tutorials
      return(
      <>
      <NavBar/> 
      <div className='Contents-Page'>
    
      <div className="contentsTitle">
            <h1>Tutorials</h1>
        </div>
        <PlaylistBar playlists={playlists} />
        <SizedBox height={10}/>
     <ContentsComponent contentsType="Tutorials" contents={tutorials}  loading={loading} />
        </div>
        </>
      )
    
 
    

}

export default TutorialsPage
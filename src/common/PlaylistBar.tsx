

import React from 'react'
import { Playlist } from '../db/models'
import { useNavigate } from 'react-router'


const PlaylistCard: React.FC<{  playlist:Playlist }>= ({playlist})=> {
  const navigate = useNavigate()
  return <div className="PlaylistCard" onClick={()=>navigate(`/tutorials?playlist=${encodeURIComponent(playlist.name)}`)}>
   <h1>
    {playlist.name}
   </h1>
  </div>
}

function PlaylistBar ({ playlists }: { playlists: Playlist[] }) {
  return <div className="playlistBar">
  { 
   playlists.length>0?(
    <>
    {
    playlists.map((playlist)=>(
      <PlaylistCard key={playlist.id} playlist={playlist}/>
    ))
    }
    </>
   ):(
    <>
    Empty Playlists
    </>
   )
  }
   </div>
}



export  {PlaylistBar}
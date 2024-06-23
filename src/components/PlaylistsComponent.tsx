


import React, { useEffect, useRef, useState } from 'react';

import { useNavigate } from 'react-router';
import { Playlist } from '../db/models';
import { editPlaylist } from '../db/playlist';


const PlaylistCard: React.FC<{ playlist:Playlist }>= ({playlist})=> {
   const [isEdit, setIsEdit] = useState(false)
   const playlistNameRef = useRef(null);
   const navigate = useNavigate()


   useEffect(() => {
  const  current = playlistNameRef.current as any
    if (isEdit && current) {
      current.focus();
    }
  }, [isEdit]);
  return (
    <div className="content-card"  style={{
      maxHeight:"50px"}
      } >
        
   
    <div className="three-dot-button">
      <div className="options-container">
      <button onClick={()=>setIsEdit(true)}>
      
      Edit
    </button>
    <button onClick={()=>navigate(`/tutorials?playlist=${encodeURIComponent(playlist.name)}`)}>
        click here 
      </button>


      </div>
    
    </div>
     
    


     <div 
        className="playlistname" 
        ref={playlistNameRef}
        contentEditable={isEdit} 
        dangerouslySetInnerHTML={{ __html: playlist.name }} 
        onKeyDown={
          (e: React.KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'Enter') {
            const target = e.target as HTMLInputElement;
            const playlistName = target.textContent
            if(playlistName){
           editPlaylist({ id: playlist.id, name: playlistName });
           setIsEdit(false)
            }
            
          }}
        }
      />     
      {/* <p>{  getPreviewContent(post.content,  50)}</p> */}
    </div>
  );
};

  function PlaylistsComponent ({ loading, playlists }: { loading: boolean; playlists:Playlist[] }) {
   
 return   <div className="contents-container">

     
    {
    loading? (<p>Loading...</p>):playlists.length > 0 ?( playlists.map((playlist) => (
    
     
      <PlaylistCard key={playlist.id}  playlist={playlist} />
   
    ))) : (
      <p>No Playlist available</p>
    )
  
    }
  </div>
  }

  export{PlaylistsComponent}
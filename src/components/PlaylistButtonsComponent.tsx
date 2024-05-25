import { useEffect, useState } from "react";
import { Playlist } from "../db/models";
import { addPlaylist, fetchPlaylists } from "../db/playlist";
import '../css/cards.css'


export const PlaylistButtonsComponent: React.FC<{ 
   setPlaylistId:(playlistId:string)=>void,
   playlistID:string
   
}> = ({    
    setPlaylistId,
    playlistID
    
    
})=>{

   
      const [showOptions, setShowOptions] = useState(false);
      const[playlists, setPlaylists] = useState<Playlist[]>([]);
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
  
  
    // You can add more options similarly
  
    // return (
    //   <div className="three-dot-button">
    //     <button onClick={toggleOptions}>&#8942;</button>
    //     {showOptions && (
    //       <div className="options-container">
    //         <input type="check-box" name="playlist-two"  />
    //         <input type="check-box" name="playlist-one"  />
    //         <input type="check-box" name="playlist-three"  />
    //         {/* Add more options here */}
    //       </div>
    //     )}
    //   </div>
    // );
    const handlePlaylistSelect = (playlistId: string) => {
      // wait(20)
      setPlaylistId(playlistId);
     
    };
    useEffect(() => {
      // fetch the list of playlists when the component mounts
      fetchPlaylists().then((playlists) => setPlaylists(playlists));
    }, []);
  
    return (
      <div className="show-playlist-button">
        <button onClick={toggleOptions}>Select Playlist</button>
        {showOptions && (
          <div className="playlist-container">
            {playlists.map((playlist) => (
              <div key={(playlist.name)}>
                <input
                  type="checkbox"
                  name={playlist.name}
                  onChange={() => handlePlaylistSelect((playlist.id))}
                  checked={playlistID === playlist.id}
                  // checked={initialPlaylist===playlist.name}
                />
                <span>{playlist.name}</span>
              </div>
            ))}
            
          <input 
            type="text" 
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key === 'Enter') {
                const target = e.target as HTMLInputElement;
               const  playlist :Playlist = { id: "", name: target.value }
                addPlaylist(playlist);
                setPlaylists((prevPlaylists) => [...prevPlaylists, playlist]);

              }
            }} 
          />
          </div>
        )}
      </div>
    );
  };
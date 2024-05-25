import { apiUrl } from "../env"
import { Playlist } from "./models"
import { fetchData } from "./getData"

const fetchPlaylists=  async ():Promise<Playlist[]> => {
    try{ 
        const playlists = await fetchData<[Playlist]>(`${apiUrl}/playlists`)
        
        
        return playlists
}catch (e){
  console.log(e)
  return []
}
 
   
}
  
const addPlaylist = async (playlist:Playlist) =>{
  
  try {
    const response = await fetch(`${apiUrl}/playlists`, {
      method: 'POST', // Specify the request method

      
      body: JSON.stringify(playlist), // Convert the post object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    alert("playlist added successfully")
    console.log('playlist added successfully:', data);

  } catch (error) {
    console.error('Error adding playlist:', error);
  }
 
   
  
}

 
const editPlaylist = async (playlist:Playlist) =>{
  
  try {
    const response = await fetch(`${apiUrl}/playlist/${playlist.id}`, {
      method: 'PUT', // Specify the request method

      
      body: JSON.stringify(playlist), // Convert the post object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    alert("playlist edited successfully")
    console.log('playlist edited successfully:', data);

  } catch (error) {
    console.error('Error adding playlist:', error);
  }
 
   
  
}


const getPlaylistWithName = async (name: string):Promise<Playlist> => {
  try {
    const response = await fetch(`${apiUrl}/playlist/${name}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    return data.data as Playlist;

  } catch (error) {
    console.error('Error fetching Playlist:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};


// TODO TODO TODO NEVER ALLOW DELETEING PLAYLIST IT WILL DELETE ALL TUTORIALS UNDER. CAN ONLY BE EDITED

// const deletePlaylist = async (playlistId:string) =>{
  
//   try {
//     const response = await fetch(`${apiUrl}/playlist/${playlistId}`, {
//       method: 'PUT', // Specify the request method

      
//       // Convert the post object to JSON
//     });

//     // Check if the response status is OK
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();
//     alert("playlist deleted successfully")
//     console.log('playlist deleted successfully:', data);

//   } catch (error) {
//     console.error('Error deleted playlist:', error);
//   }
 
   
  
// }

export{fetchPlaylists, addPlaylist, editPlaylist, getPlaylistWithName}
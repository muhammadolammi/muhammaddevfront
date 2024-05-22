import { apiUrl } from "../env"
import { Playlist } from "../models"
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



export{fetchPlaylists}
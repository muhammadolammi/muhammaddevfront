


import React, { useEffect, useState } from 'react'
import NavBar from '../common/NavBar'
import { PlaylistsComponent } from '../components/PlaylistsComponent'
import { Playlist } from '../db/models'
import { fetchPlaylists } from '../db/playlist'

type Props = {}

const PlaylistsPage = (props: Props) => {
    const [ playlists, setPlaylists] = useState<Playlist[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(()=>{
     fetchPlaylists().then((playlists)=>{
      setLoading(true)
        setPlaylists(playlists)
        setLoading(false)
     }).catch((e)=>{
        console.log("error getting playlist e:", e)
     })
    },[])
  return (
    <div>
        <NavBar />
        <PlaylistsComponent playlists={playlists} loading={loading}/>
    </div>
  )
}

export  {PlaylistsPage}
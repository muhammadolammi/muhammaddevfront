import {  Tutorial } from "../models";

const dataToTutorial =(data:any):Tutorial=>{
    return {
        id: data.id,
        title:data.title,
        description: data.description,
        tutorial_url: data.tutorial_url,
        thumbnail: data.thumbnail,
        youtube_link: data.youtube_link,
        playlist_id: data.playlist_id
    }
}

export{dataToTutorial}
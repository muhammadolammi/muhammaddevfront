import { Post } from "../db/models";

const dataToPost =(data:any):Post=>{
    return {
        id: data.id,
        title:data.title,
        content: data.content,
        post_url: data.post_url,
        thumbnail: data.thumbnail
    }
}

export{dataToPost}
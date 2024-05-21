
// import { resolveCaa } from 'dns'
import { useNavigate } from 'react-router-dom';
import{apiUrl} from '../env'
import { Post } from '../models'
import { fetchData } from './getData'
const fetchPosts=  async ():Promise<Post[]> => {
    try{ 
        const posts = await fetchData<[Post]>(`${apiUrl}/posts`??"", )
        
        
        return posts
}catch (e){
  console.log(e)
  return []
}
 
   
}


const publishPost = async (post:Post) =>{
  
  try {
    const response = await fetch(`${apiUrl}/posts`, {
      method: 'POST', // Specify the request method

      
      body: JSON.stringify(post), // Convert the post object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    alert("Post published successfully")
    console.log('Post published successfully:', data);

  } catch (error) {
    console.error('Error publishing post:', error);
  }
 
   
  
}

const deletePost = async (postID:string) =>{
  
  try {
    const response = await fetch(`${apiUrl}/posts/${postID}`, {
      method: 'DELETE', // Specify the request method

      
      // body: JSON.stringify(post), // Convert the post object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // const data = await response.json();
    alert("Post Deleted successfully")
    // console.log('Post published successfully:', data);

  } catch (error) {
    console.error('Error publishing post:', error);
  }
 
   
  
}


const editPost = async (post:Post) =>{
  
  try {
    const response = await fetch(`${apiUrl}/posts/${post.id}`, {
      method: 'PUT', // Specify the request method

      
      body: JSON.stringify(post), // Convert the post object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // const data = await response.json();
    alert("Post Edited successfully")
    // console.log('Post published successfully:', data);

  } catch (error) {
    console.error('Error publishing post:', error);
  }
 
   
  
}


const getPostWithId = async (id: string): Promise<Post> => {
  try {
    const response = await fetch(`${apiUrl}/post/${id}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data as Post;

  } catch (error) {
    console.error('Error fetching post:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};

export{fetchPosts, publishPost, getPostWithId, editPost}
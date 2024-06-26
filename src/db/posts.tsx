
// import { resolveCaa } from 'dns'
// import { useNavigate } from 'react-router-dom';
import{apiKey, apiUrl} from '../env'
import { Post } from './models'
import { fetchData } from './getData'
const fetchPosts=  async ():Promise<Post[]> => {
    try{ 
      console.log(apiUrl)
        const posts = await fetchData<[Post]>(`${apiUrl}/posts` )
        
        
        return posts
}catch (e){
  console.log(e)
  return []
}
 
   
}


const publishPost = async (post:Post, accesToken : string) =>{
  
  try {
    const response = await fetch(`${apiUrl}/posts`, {
      
      method: 'POST', // Specify the request method

      headers: {
        "Authorization": accesToken,
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
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
    const response = await fetch(`${apiUrl}/post/${postID}`, {
      method: 'DELETE', // Specify the request method

      headers: {
        "Authorization": apiKey?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
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
    console.error('Error deleting post:', error);
  }
 
   
  
}


const editPost = async (post:Post) =>{
  
  try {
    const response = await fetch(`${apiUrl}/post/${post.id}`, {
      method: 'PUT', // Specify the request method
      headers: {
        "Authorization": apiKey?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
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
    console.error('Error editing post:', error);
  }
 
   
  
}


const getPostWithId = async (id: string):Promise<Post> => {
  try {
    const response = await fetch(`${apiUrl}/post/${id}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Fetched data:", data); // Log the entire fetched data
    // // Ensure the data contains the expected properties
    // if (!data.id || !data.content || !data.post_url || !data.thumbnail || !data.title) {
    //   throw new Error("Fetched data is missing some properties");
    // }
    return data.data as Post;

  } catch (error) {
    console.error('Error fetching post:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};



const getPostWithTitle = async (title: string):Promise<Post> => {
  try {
    const response = await fetch(`${apiUrl}/getpost/${title}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Fetched data:", data); // Log the entire fetched data
    // // Ensure the data contains the expected properties
    // if (!data.id || !data.content || !data.post_url || !data.thumbnail || !data.title) {
    //   throw new Error("Fetched data is missing some properties");
    // }
    return data.data as Post;

  } catch (error) {
    console.error('Error fetching post:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};

export{fetchPosts, publishPost, getPostWithId, editPost, deletePost, getPostWithTitle}
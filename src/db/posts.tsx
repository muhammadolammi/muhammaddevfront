
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

      
      body: JSON.stringify({
        content: post.content,
        title: post.title,
        post_url : post.post_url
      }), // Convert the post object to JSON
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

export{fetchPosts, publishPost}
import{apiKey, apiUrl} from '../env'
import { EmptySessionToken, SessionToken, User } from './models';





export const signUp = async (email:string, password:string, firstName:string, lastName:string ) =>{


   const  body =  {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName 

    }

    try {
      console.log(apiKey)
        const response = await fetch(`${apiUrl}/signup`, {
          
          method: 'POST', // Specify the request method
    
          headers: {
            "Authorization": apiKey?? "",
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(body), // Convert the body object to JSON
        });
         console.log(response.body)
      } 
        catch(e){
          console.log(e)
        }

        

}



export const signIn = async ( email: string, password: string, navigate:any) =>{

  const  body =  {
   email: email,
   password: password,
 
   }

   try {
       const response = await fetch(`${apiUrl}/signin`, {
         
         method: 'POST', // Specify the request method
   
         headers: {
           "Authorization": apiKey?? "",
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(body),
         credentials : 'include' // Convert the body object to JSON
       });

       alert("signed In")
       navigate('/dashboard')
     } 
       catch(e){
         console.log(e)
       }

       

}



export const isUserLoggedIn = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${apiUrl}/validate`, {
      method: 'POST',
      headers: {
        "Authorization": apiKey ?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // You can optionally include a body if needed
      // body: JSON.stringify({ /* body data */ }),
      credentials : 'include'
    });

    // Check if the response status is within the 200-299 range
    if (response.ok) {
      return true; // User is logged in
    }

    // Handle other response status codes as needed
    // For example, unauthorized (401) or server errors (5xx)
    // You can log the response body for debugging
    console.log(await response.text());
    return false;
  } catch (e) {
    // Handle fetch errors (e.g., network error)
    console.log(e);
    return false;
  }
};



export const getUserSessionToken = async (): Promise<SessionToken> => {
  try {
    const response = await fetch(`${apiUrl}/session`, {
      method: 'GET',
      headers: {
        "Authorization": apiKey ?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // You can optionally include a body if needed
      // body: JSON.stringify({ /* body data */ }),
      credentials : 'include'
    });

  
    // // Handle other response status codes as needed
    // // For example, unauthorized (401) or server errors (5xx)
    // // You can log the response body for debugging
    // console.log(await response.text());
    // return EmptySessionToken
    const payload = await response.json()
    
    return payload as SessionToken; 
    
  } catch (e) {
    // Handle fetch errors (e.g., network error)
    console.log(e);
    return EmptySessionToken
   
  }
};

export const refreshToken = async ( userId: string, refreshToken: string) =>{


  const  body =  {
   user_id: userId,
   refresh_token: refreshToken,
 
   }

   try {
        await fetch(`${apiUrl}/refresh`, {
         
         method: 'POST', // Specify the request method
   
         headers: {
           "Authorization": apiKey?? "",
           // 'Content-Type': 'application/x-www-form-urlencoded',
         },
         body: JSON.stringify(body), // Convert the body object to JSON
       });
     } 
       catch(e){
         console.log(e)
       }

       

}


export const getUserWithId = async (id: string):Promise<User> => {
  try {
    const response = await fetch(`${apiUrl}/users/${id}`, {
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
    return data.data as User;

  } catch (error) {
    console.error('Error fetching post:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};
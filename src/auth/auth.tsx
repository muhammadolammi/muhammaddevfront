import{apiKey, apiUrl} from '../env'


type SignUpProps = {
    email:string, 
    password:string,
    first_name: string,
    last_name: string
}


export const signUp = async ( signUpProps: SignUpProps) =>{


   const  body =  {
    email: signUpProps.email,
    password: signUpProps.password,
    first_name: signUpProps.first_name,
    last_name: signUpProps.last_name 

    }

    try {
      console.log(apiKey)
        const response = await fetch(`${apiUrl}/users`, {
          
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



export const signIn = async ( email: string, password: string) =>{


  const  body =  {
   email: email,
   password: password,
 
   }

   try {
       const response = await fetch(`${apiUrl}/login`, {
         
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



export const isUserLoggedIn = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        "Authorization": apiKey ?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      // You can optionally include a body if needed
      // body: JSON.stringify({ /* body data */ }),
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



export const refreshToken = async ( email: string, refreshToken: string) =>{


  const  body =  {
   email: email,
   refresh_token: refreshToken,
 
   }

   try {
       const response = await fetch(`${apiUrl}/refresh`, {
         
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
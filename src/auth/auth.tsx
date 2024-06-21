import { json } from 'stream/consumers';
import{apiKey, apiUrl} from '../env'
import {EmptyUser, User } from './models';





export const signUp = async (email:string, password:string, firstName:string, lastName:string ) =>{


   const  body =  {
    email: email,
    password: password,
    first_name: firstName,
    last_name: lastName 

    }

    try {
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
       await fetch(`${apiUrl}/signin`, {
         
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









export const getUser = async (): Promise<User> =>{
     try{
   const res =   await fetch(`${apiUrl}/users/me`,
    {
      credentials: 'include'
    }
   )
   const  body = await res.json()
    if (res.ok){
      
    const  user = body.data
   
      return user
      
      
    }
          return EmptyUser
     
     
     }catch (e){
    
      return EmptyUser
     }
}


export const refreshTokens = async (refreshToken:string) =>{
  const  body =  {
    refresh_token: refreshToken
    }
  

  try{
  const res =  await fetch(`${apiUrl}/refresh`,
 {
  headers: {
    "Authorization": apiKey?? "",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  method: "POST",
   credentials: 'include',
   body: JSON.stringify(body),
 },

)


   if (res.ok){
    console.log("token refreshed")
   return
  }

  const resBody = await res.json()
  console.log(resBody, res.status)


   
  }catch (e){
    console.log("token cant be refreshed, err:", e)
  }
}





export const validateUser = async (useraccesstoken:string): Promise<boolean> =>{
  try{
const res =   await fetch(`${apiUrl}/validate`,
 {
 method:"POST",
  headers: {
    "Authorization": useraccesstoken,
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
   credentials: 'include'
 }
)
const  body = await res.json()
 if (res.ok){
  console.log("validated")


   return true
   
   
 }

   console.log(body)
   return false
  
  
  }catch (e){
   console.log("cant validate, err: ", e)
   return false
  }
}
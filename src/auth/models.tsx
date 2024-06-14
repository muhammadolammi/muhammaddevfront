export interface User  {
    email : string;
    id : string;
    refresh_token: string;
    first_name: string;
    last_name: string;

  
  }

  export const EmptyUser:User = {
    id: "",
    email: "",
    refresh_token:"",
    first_name:"",
    last_name:""
  }

  export interface SessionToken  {
    token : string;
    token_expires : string;
   
  
  }

  export const EmptySessionToken:SessionToken = {
    token: "",
    token_expires: "",
  
  }

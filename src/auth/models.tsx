export interface User  {
    email : string;
    id : string;
    refresh_token: string;
    access_token: string;
    first_name: string;
    last_name: string;

  
  }

  export const EmptyUser:User = {
    id: "",
    email: "",
    refresh_token:"",
    access_token: "",
    first_name:"",
    last_name:""
  }

 

import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import {  signIn } from '../auth/auth';
import { useNavigate } from 'react-router';



type Props = {}

export  const SignInnPage: React.FC<{  }> = ({  }) => {
  const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
   const navigate = useNavigate()

   const onSignIn = async() => {
   try{
    await signIn(email, password, navigate)
    
   }  catch(e){
    alert(e)
   }   
    
   }

  return (
    <div>
        <NavBar />

        <div>
            <input 
             type="text" 
             value={email}
            placeholder="Email" id="#email" onChange={(e)=>{
              setEmail(e.target.value)
              }}></input>

            
        </div>
        <div>
            <input
             type="text" 
             value={password}
            placeholder="Password" id="#password" onChange={(e)=>{
              setPassword(e.target.value)
              }}></input>
        </div>

     
        <button className='bg-red'
      onClick={onSignIn}
          >
        SigIn
      </button>

    </div>
  )
}


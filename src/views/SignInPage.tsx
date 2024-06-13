import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import {  signIn } from '../auth/auth';



type Props = {}

export  const SignInnPage: React.FC<{  }> = ({  }) => {
  const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
   

   const onSignIn = async() => {
      
    await signIn(email, password,)
   }

  return (
    <div>
        <NavBar />

        <div>
            <input placeholder="Email" id="#email" onChange={(e)=>{
              setEmail(e.target.value)
              }}></input>

            
        </div>
        <div>
            <textarea placeholder="Password" id="#password" onChange={(e)=>{
              setPassword(e.target.value)
              }}></textarea>
        </div>

     
        <button
      onClick={onSignIn}
      >
        SigIn
      </button>

    </div>
  )
}


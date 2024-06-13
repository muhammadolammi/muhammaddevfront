import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import { signUp } from '../auth/auth';



type Props = {}

export  const SignUpPage: React.FC<{  }> = ({  }) => {
  const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName ] = useState("")

   const onSignUp = async() => {
      
    await signUp({email, password, first_name, last_name})
   }

  return (
    <div>
        <NavBar />

        <div>
            <input  placeholder="Email" id="#email" onChange={(e)=>{
              setEmail(e.target.value)
              }}></input>

            
        </div>

        <div>
        <input placeholder="FirstName" id="#firstname" onChange={(e)=>{
              setFirstName(e.target.value)
              }}></input>
              
        </div>
        <div>
        <input placeholder="LastName" id="#lastname" onChange={(e)=>{
              setLastName(e.target.value)
              }}></input>
        </div>
        <div>
            <textarea placeholder="Password" id="#password" onChange={(e)=>{
              setPassword(e.target.value)
              }}></textarea>
        </div>
      
      <button
      onClick={onSignUp}
      >
        SignUp
      </button>


    </div>
  )
}


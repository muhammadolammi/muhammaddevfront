import React, { useState } from 'react';
import NavBar from '../common/NavBar';
import { signUp } from '../auth/auth';



type Props = {}

export  const SignUpPage: React.FC<{  }> = ({  }) => {
  const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName ] = useState("")

   const onSignUp = async() => {
      
    await signUp(email, password, firstName, lastName)
   }

  return (
    <div>
        <NavBar />

        <div>
            <input 
                        value={email}

            placeholder="Email" id="#email" onChange={(e)=>{
              setEmail(e.target.value)
              }}></input>

            
        </div>

        <div>
        <input
                    value={firstName}

        placeholder="FirstName" id="#firstname" onChange={(e)=>{
              setFirstName(e.target.value)
              }}></input>
              
        </div>
        <div>
        <input
                    value={lastName}

        placeholder="LastName" id="#lastname" onChange={(e)=>{
              setLastName(e.target.value)
              }}></input>
        </div>
        <div>
            <input 
            type='text'
            value={password}
            placeholder="Password" id="#password" onChange={(e)=>{
              setPassword(e.target.value)
              }}></input>
        </div>
      
      <button
      onClick={onSignUp}
      >
        SignUp
      </button>


    </div>
  )
}


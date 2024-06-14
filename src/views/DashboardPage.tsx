import React, { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUserSessionToken, getUserWithId, isUserLoggedIn, refreshToken } from '../auth/auth';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie'
import { SessionToken, EmptyUser, User } from '../auth/models';
import { EmptyPost } from '../db/models';

export const DashboardPage: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User>(EmptyUser);
  const [sessionToken, setSessionToken] = useState<SessionToken>({token:"", token_expires:""})
  const [isActive, setIsActive] = useState<boolean>(false);

  const [callRefreshTimeout , setCallRefreshTimeout] = useState()
  const navigate = useNavigate();



  useEffect(() => {
    const checkAuth = async () => {
      try {
        
        const userLoggedIn = await isUserLoggedIn();
        if (userLoggedIn) {
          setIsLoggedIn(true);
          const sessionToken = await getUserSessionToken()
          setSessionToken(sessionToken)
          if (sessionToken.token !=="" && sessionToken.token) {

            setSessionToken(sessionToken)
          
            const decodedToken: { sub: string; exp: number } = jwtDecode(sessionToken.token);
            const userId = decodedToken.sub;
      
            // Get the current user details
            const user = await getUserWithId(userId);
            
            setCurrentUser(user);
      
           
      
          }
        } else {
          setIsLoggedIn(false);
          navigate('/signin');
        }
      } catch (error) {
        console.error('Error during authentication check', error);
        setIsLoggedIn(false);
        navigate('/signin');
      }
    };

    checkAuth();
  },[navigate] );



  
  return (
    <div>
      <h1>Dashboard</h1>
      {/* <p>User logged in: {loggedIn? "true": "false"}</p> */}
      <Routes>
        {/* Dashboard subroutes */}
        {/* <Route path="/dashboard/subroute1" element={<Subroute1 />} />
        <Route path="/dashboard/subroute2" element={<Subroute2 />} /> */}
        {/* Add more subroutes as needed */}
      </Routes>
    </div>
  );
};


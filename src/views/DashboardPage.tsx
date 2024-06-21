import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate}from 'react-router-dom';
import { getUser, refreshTokens, validateUser } from '../auth/auth';
import { EmptyUser, User } from '../auth/models';
import { PublishPostPage } from './PublishPostPage';
import { PublishTutorialPage } from './PublishTutorialPage';
import { EditPostPage } from './EditPostPage';
import { EditTutorialPage } from './EditTutorialPage';


export const DashboardPage: React.FC =  () => {
  const [currentUser, setCurrentUser] = useState<User>(EmptyUser) 
  const [isUserLoggedIn, setIsUserLoggedIn]= useState<boolean>(false)
  const navigate = useNavigate()
  
 
   const updateUser = async ()=>{
 
      const updatedUser = await getUser();
      if (updatedUser === EmptyUser){
        navigate('/signin')
      }
      setCurrentUser(updatedUser);
     
   
   }
 
  const onRefresh = async () => {
   
    if (!currentUser ||currentUser.refresh_token === "") {
      console.log("Empty user or missing refresh token");
      return 
    }
      console.log(currentUser.refresh_token)
      await refreshTokens(currentUser.refresh_token);
      console.log(currentUser.refresh_token)
      await refreshTokens(currentUser.refresh_token);
      const updatedUser = await getUser();
      setCurrentUser(updatedUser);
      console.log(currentUser.refresh_token)
       

  };

  
  useEffect( ()=>{
   
    updateUser()

 
     
   
  }, [])
    
   useEffect(()=>{
    if(currentUser && currentUser.access_token && currentUser.access_token!==""){
      validateUser(currentUser.access_token).then((isLoggedIn)=>{
        setIsUserLoggedIn(isLoggedIn)
      })
    }
   },[currentUser]) 

  useEffect(()=>{
    
    const minute = 1000 *60
     onRefresh()
     setInterval( ()=>{ onRefresh()  }, 3 * minute)

  }, [])

  





  
  return (
    <div>
    
     
      <Routes>
        {/* Dashboard subroutes */}

        <Route   path= "/"   element= {
          
         <div>
           <p>Yes the user is logged in , status : {isUserLoggedIn.toString()}</p>
           {/* <p>User logged in: {loggedIn? "true": "false"}</p> */}
          </div>
         } />

        
        <Route   path= "/publishpost"   element= {<PublishPostPage/> } />
        <Route   path= "/publishtutorial"   element= {<PublishTutorialPage/> } />
        <Route   path= "/editpost/:postTitle"   element= {<EditPostPage/> } />
        <Route   path= "/edittutorial/:tutorialTitle"   element= {<EditTutorialPage/> } />



           
        {/* <Route path="/dashboard/subroute1" element={<Subroute1 />} />
        <Route path="/dashboard/subroute2" element={<Subroute2 />} /> */}
        {/* Add more subroutes as needed */}
      </Routes>
    </div>
  );
};


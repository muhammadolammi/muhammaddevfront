import React from 'react';
import './index.css';
import { fetchTutorials } from './db/tutorial';
import { useState , useEffect} from 'react';
import { Tutorial } from './models';
import { Tutorials } from './tutorials';
// import{Tutorial} from './models';

function App() {
   const [tutorials, setTutorials] = useState<Tutorial[]>([])
   const [loading, setLoading] = useState<boolean>(true);

  

   useEffect(()=>{
    const getTutorials = async () => {
      try {
        const tutorialList = await fetchTutorials();
        console.log(tutorialList); // Check what tutorialList contains
        setTutorials(tutorialList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    getTutorials();
   },[])

  
  
   return (
    <div className="App">
      <header className='header'>
        <h1>Hi This is MuhammadDev Frontend</h1>
      </header>
      <div className="Body">
      <div className="tutorial-head">
            <h1>Tutorials</h1>
        </div>
       <Tutorials loading={loading} tutorials={tutorials}/>
      </div>
    </div>
  );
}

export default App;




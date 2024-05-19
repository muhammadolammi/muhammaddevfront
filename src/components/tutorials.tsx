
import React from 'react';
import { Tutorial } from '../models';


const TutorialCard: React.FC<{ tutorial: Tutorial }> = ({ tutorial }) => {
    return (
      <div className="tutorial-card">
       
        <h2>{tutorial.title}</h2>
        <p>{tutorial.description}</p>
      </div>
    );
  };

  function Tutorials ({ loading, tutorials }: { loading: boolean; tutorials: Tutorial[] }) {
 return   <div className="tutorials-container">
     
    {
    loading? (<p>Loading...</p>):tutorials.length > 0 ?( tutorials.map((tutorial) => (
      <TutorialCard key={tutorial.id} tutorial={tutorial} />
    ))) : (
      <p>No tutorials available</p>
    )
  
    }
  </div>
  }

  export{Tutorials}
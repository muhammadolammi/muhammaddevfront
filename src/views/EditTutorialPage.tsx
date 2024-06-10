import '../css/editorpage.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tutorial } from '../db/models';

import {  getTutorialWithTitle } from '../db/tutorial';
import { dataToTutorial } from '../helperfunc/datatToTutorial';
import { EditTutorialEditor } from '../components/EditTutorialEditor';
import { ReFormatTitle } from '../helperfunc/formatTitle';

type Props = {};

const EditTutorialPage: React.FC<Props> = () => {
  const { tutorialTitle } = useParams<{ tutorialTitle: string }>(); // Extract postId from the URL
  const [title, setTitle] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentTutorial, setCurrentTutorial] = useState<Tutorial|null >(null);

  useEffect(() => { 
    const fetchTutorial = async () => {
      try {
        if (tutorialTitle) {
          const tutorialData = await getTutorialWithTitle(tutorialTitle);
          
          setTitle(tutorialData.title);
          // setThumbnail(postData.thumbnail);
          const currentTutorial =  dataToTutorial(tutorialData)
          setCurrentTutorial(currentTutorial);
          // console.log(currentPost)
          // console.log(postData)
          // console.log(postData.id)
        } else {
          throw new Error('No tutorialId provided');
        }
      } catch (e) {
        console.error("Error getting tutorial with ID:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchTutorial();
  }, [tutorialTitle]);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (!currentTutorial) {
    return <p>No Tutorial found</p>;
  }

  return (
    <div className="publish-page">
      <textarea
        id='title-input'
        placeholder='Title'
        onChange={e => setTitle(e.target.value)}
        value={ReFormatTitle(title)}
      />
      <EditTutorialEditor
        tutorial={currentTutorial}
        title={ReFormatTitle(title)}
        setLoading={setLoading}
      />
      <br />
    </div>
  );
};

export { EditTutorialPage  };

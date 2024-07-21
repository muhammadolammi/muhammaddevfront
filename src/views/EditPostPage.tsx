
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../db/models';
import {  getPostWithTitle } from '../db/posts';
import { EditPostEditor } from '../components/EditorComponents';
import { dataToPost } from '../helperfunc/dataToPost';
import { ReFormatTitle } from '../helperfunc/formatTitle';

type Props = {};

const EditPostPage: React.FC<Props> = () => {
  const { postTitle } = useParams<{ postTitle: string }>(); // Extract postId from the URL
  const [title, setTitle] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPost, setCurrentPost] = useState<Post|null >(null);

  useEffect(() => { 
    const fetchPost = async () => {
      try {
        if (postTitle) {
          const postData = await getPostWithTitle(postTitle);
          
          setTitle(postData.title);
          // setThumbnail(postData.thumbnail);
          const currentPost =  dataToPost(postData)
          setCurrentPost(currentPost);
          // console.log(currentPost)
          // console.log(postData)
          // console.log(postData.id)
        } else {
          throw new Error('No postId provided');
        }
      } catch (e) {
        console.error("Error getting post with ID:", e);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postTitle]);



  if (loading) {
    return <p>Loading...</p>;
  }

  if (!currentPost) {
    return <p>No post found</p>;
  }

  return (
    <div className="publish-page">
      <textarea
        id='title-input'
        placeholder='Title'
        onChange={e => setTitle(e.target.value)}
        value={ReFormatTitle(title)}
      />
      <EditPostEditor
        post={currentPost}
        title={ReFormatTitle(title)}
        setLoading={setLoading}
      />
      <br />
    </div>
  );
};

export { EditPostPage  };

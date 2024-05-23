import '../css/editorpage.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Post } from '../models';
import { getPostWithId } from '../db/posts';
import { EditPostEditor } from '../components/EditPostEditor';
import { dataToPost } from '../helperfunc/dataToPost';

type Props = {};

const EditPostPage: React.FC<Props> = () => {
  const { postID } = useParams<{ postID: string }>(); // Extract postId from the URL
  const [title, setTitle] = useState("");
  // const [thumbnail, setThumbnail] = useState("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPost, setCurrentPost] = useState<Post|null >(null);

  useEffect(() => { 
    const fetchPost = async () => {
      try {
        if (postID) {
          const postData = await getPostWithId(postID);
          
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
  }, [postID]);



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
        value={title}
      />
      <EditPostEditor
        post={currentPost}
        title={title}
        setLoading={setLoading}
      />
      <br />
    </div>
  );
};

export { EditPostPage  };

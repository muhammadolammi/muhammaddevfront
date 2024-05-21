import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../models';
import { getPostWithId } from '../db/posts';
import { EditEditor } from '../components/EditEditor';

type Props = {};

const EditPost: React.FC<Props> = () => {
  const { postId } = useParams<{ postId: string }>(); // Extract postId from the URL
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  // const [error, setError] = useState<string | null>(null);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        if (postId) {
          const postData = await getPostWithId(postId);
          setCurrentPost(postData);
          setTitle(postData.title);
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
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

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
      <EditEditor
        post={currentPost}
        title={title}
        setLoading={setLoading}
      />
      <input type="file" />
      <br />
    </div>
  );
};

export { EditPost };

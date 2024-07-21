

import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router'
import { PostsComponent } from '../components/ContentsComponent';
import { fetchPosts } from '../db/posts';
import placeholder from '../assets/images/placeholder.png';


import NavBar from '../common/NavBar';
import Footer from '../common/Footer';
import { EmptyPost, Post } from '../db/models';
import { BackwardIcon, ForwardIcon, PlayCircleIcon } from '@heroicons/react/24/solid';
import Placeholder from '@tiptap/extension-placeholder';


type Props = {}

const PostsPage = (props: Props) => {
  const [mainPostCurrentIndex, setMainPostCurrentIndex] = useState<number>(0);
  const [posts, setPosts] = useState<Post[]>([]);
  const [mainPosts, setMainPosts] = useState<Post[]>([]);
  const [recentPosts, setRecentPosts]= useState<Post[]>([])
  const [mostViewedPosts, setMostViewedPosts]= useState<Post[]>([])


  useEffect(() => {
    // Update mainPosts to contain the first three posts
    setMainPosts(posts.slice(0, 3));
    setRecentPosts(posts.slice(0,4))
    setMostViewedPosts(posts.slice(0,4))
    // Ensure the index is within the new mainPosts array
    setMainPostCurrentIndex(0);
  }, [posts]);

  // useEffect(() => {
  //   // Ensure the index is within bounds of the mainPosts array
  //   if (mainPostCurrentIndex >= mainPosts.length) {
  //     setMainPostCurrentIndex(mainPosts.length - 1);
  //   }
  // }, [mainPosts, mainPostCurrentIndex]);


  // SET THEREE DUMMY TUTORIALS , TO TESTS BUILDING
  useEffect(() => {
  //  setTutorials(
  //   [
  //     {
  //       id: "kk",
  //       title: "Hello World",
     
  //       description: "What's up",
  //       thumbnail: "",
  //       tutorial_url: "__",
  //       youtube_link:"_",
  //       playlist_id:"_"

  //     },
  //     {
  //       id: "xxx",
  //       title: "Another Post",
  //       description: "More content here",
  //       thumbnail: "",
  //       tutorial_url: "__",
  //       youtube_link:"_",
  //       playlist_id:"_"
  //     },
  //     {
  //       id: "zzz",
  //       title: "Another Post",
       
  //       description: "All good",
  //       thumbnail: "",
  //       tutorial_url: "__",
  //       youtube_link:"_",
  //       playlist_id:"_"
  //     },
  //     {
  //       id: "mmmm",
  //       title: "Last Tutorial",
       
  //       description: "All good",
  //       thumbnail: "",
  //       tutorial_url: "__",
  //       youtube_link:"_",
  //       playlist_id:"_"
  //     },
  //   ]
  //  )

 

  }, [])
  

  const goToSlide = (index: number) => {
    setMainPostCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setMainPostCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : mainPosts.length - 1
    );
  };

  const handleNextClick = () => {
    setMainPostCurrentIndex((prevIndex) =>
      prevIndex < mainPosts.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Safely access post at current index
  const currentPost = mainPosts[mainPostCurrentIndex];

  return (
    <div className='bg-black'>
      <NavBar />
      <div className='body'>
        <div className='container flex shrink h-[220px] md:h-[400px] md:w-[80%] gap-x-2 items-center '>
          <button  onClick={
            handlePrevClick
          }> 
                <BackwardIcon className=' size-9 stroke-white fill-transparent' />

          </button>
          {
          ( <MainPost post={currentPost?? EmptyPost} />
          ) 
          }
           <button onClick={
            handleNextClick
          }> 
            <ForwardIcon className=' size-9 stroke-white fill-transparent' />

          </button>
        </div>

        {/* Recent TUTORIAL */}
   <div className='container mt-[100px]  text-white w-[80%] '>
    <p className='text-xl text-center text-[#F0F2F5] font-coolvetica font-medium'>Recent</p>
    {/* TODO REMEMBER TO MANAGE TUTORIAL LOADING HERE */}
    <PostsComponent posts={recentPosts} loading={false}/>
   </div>

        {/* Most Viewed TUTORIAL */}
        <div className='container mt-[100px]  text-white w-[80%]'>
    <p className='text-xl text-center text-[#F0F2F5] font-coolvetica font-medium'>Most Viewed</p>
    {/* TODO REMEMBER TO MANAGE TUTORIAL LOADING HERE */}
    <PostsComponent posts={mostViewedPosts} loading={false}/>
   </div>


        
      </div>
      <Footer/>
    </div>
  );
   
}

type MainPostProps = {
  post: Post;
}

const MainPost = ({ post }: MainPostProps) => {
  
  var   thumbnail = ""
 if (post.thumbnail===""){
  thumbnail= placeholder

 }
 if(post.thumbnail !==""){
  thumbnail = post.thumbnail
 }


  return (
    <div className='w-full h-full mt-[20px]  bg-[#131313] p-2 flex flex-col justify-center items-start '>
    <div className='h-[70%] w-full relative flex justify-center items-center mb-[10px]'>
      <img src={thumbnail} alt="Placeholder" className='w-[95%] max-w-full h-full' />

    </div>

    <div className='ml-[20px]'>
    <div className='text-[#B0B0B0] font-Poppins font-bold'>{post.title}</div>
    <div className='text-[#B0B0B0] ml-[20px] font-Poppins font-bold text-[8px]' >{post.content}</div>
    </div>

  </div>
  );
}

export default PostsPage
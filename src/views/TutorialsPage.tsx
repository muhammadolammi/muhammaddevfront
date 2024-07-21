import { useEffect, useState } from 'react';
import NavBar from '../common/NavBar';
import { EmptyTutorial, Post, Tutorial } from '../db/models';
import {  TutorialsComponent } from '../components/ContentsComponent';
import Footer from '../common/Footer';
import videoPlaceholder from '../assets/images/videoplaceholder.png';
import { BackwardIcon, ForwardIcon, PlayCircleIcon } from '@heroicons/react/24/solid';


type Props = {}

const TutorialsPage = (props: Props) => {
  const [mainTutorialCurrentIndex, setMainTutorialCurrentIndex] = useState<number>(0);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [mainTutorials, setMainTutorials] = useState<Tutorial[]>([]);
  const [recentTutorials, setRecentTutorials]= useState<Tutorial[]>([])
  const [mostViewedTutorials, setMostViewedTutorials]= useState<Tutorial[]>([])


  useEffect(() => {
    // Update mainPosts to contain the first three posts
    setMainTutorials(tutorials.slice(0, 3));
    setRecentTutorials(tutorials.slice(0,4))
    setMostViewedTutorials(tutorials.slice(0,4))
    // Ensure the index is within the new mainPosts array
    setMainTutorialCurrentIndex(0);
  }, [tutorials]);

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
    setMainTutorialCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setMainTutorialCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : mainTutorials.length - 1
    );
  };

  const handleNextClick = () => {
    setMainTutorialCurrentIndex((prevIndex) =>
      prevIndex < mainTutorials.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Safely access post at current index
  const currentTutorial = mainTutorials[mainTutorialCurrentIndex];

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
          ( <MainTutorial tutorial={currentTutorial?? EmptyTutorial} />
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
    <TutorialsComponent tutorials={recentTutorials} loading={false}/>
   </div>

        {/* Most Viewed TUTORIAL */}
        <div className='container mt-[100px]  text-white w-[80%]'>
    <p className='text-xl text-center text-[#F0F2F5] font-coolvetica font-medium'>Most Viewed</p>
    {/* TODO REMEMBER TO MANAGE TUTORIAL LOADING HERE */}
    <TutorialsComponent tutorials={mostViewedTutorials} loading={false}/>
   </div>


        
      </div>
      <Footer/>
    </div>
  );
}

type MainTutorialProps = {
  tutorial: Tutorial;
}

const MainTutorial = ({ tutorial }: MainTutorialProps) => {
  
  var   thumbnail = ""
 if (tutorial.thumbnail===""){
  thumbnail= videoPlaceholder

 }
 if(tutorial.thumbnail !==""){
  thumbnail = tutorial.thumbnail
 }


  return (
    <div className='w-full h-full mt-[20px]  bg-[#131313] p-2 flex flex-col justify-center items-start '>
    <div className='h-[70%] w-full relative flex justify-center items-center mb-[10px]'>
      <img src={thumbnail} alt="Placeholder" className='w-[95%] max-w-full h-full' />
      <PlayCircleIcon className='absolute size-12 stroke-white fill-transparent' />

    </div>

    <div className='ml-[20px]'>
    <div className='text-[#B0B0B0] font-Poppins font-bold'>{tutorial.title}</div>
    <div className='text-[#B0B0B0] ml-[10px] font-Poppins font-bold'> {tutorial.description? ("Description"):("No Tutorial available")}</div>
    <div className='text-[#B0B0B0] ml-[20px] font-Poppins font-bold text-[8px]' >{tutorial.description}</div>
    </div>

  </div>
  );
}

export default TutorialsPage;
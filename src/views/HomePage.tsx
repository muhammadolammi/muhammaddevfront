import skillCodeImage from '../assets/images/skillcode.png'; // Import the placeholder image


import React, { useEffect, useState } from 'react'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer';
import  {ActionButton, PageButton } from '../common/ActionButton';
import { PlusIcon , ChevronRightIcon} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';
import { PostsComponent, TutorialsComponent } from '../components/ContentsComponent';
import { Post, Tutorial } from '../db/models';
import { fetchPosts } from '../db/posts';
import { fetchTutorials } from '../db/tutorial';
import { PageImageFigure } from '../common/PageImageFigure';


function HomePage() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>([]);
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  


  const [postFetchloading , setPostFetchLoading] = useState<boolean>(false);
  const [tutorialFetchloading , setTutorialFetchLoading] = useState<boolean>(false);

  const onNavigate = ()=>{
    navigate('/tutorials')
  }


  useEffect(()=>{
    const getPosts =()=>{
        setPostFetchLoading(true)
        fetchPosts().then((postsData)=>{
          setPosts(postsData)
         }).catch((e)=>{
          throw(e)
         })
         setPostFetchLoading(false)
        }

        const getTutorials =()=>{
          setTutorialFetchLoading(true)
          fetchTutorials().then((tutorialData)=>{
            setTutorials(tutorialData)
           }).catch((e)=>{
            throw(e)
           })
           setTutorialFetchLoading(false)
          }
        
    
      
   
 getPosts()
 getTutorials()
 
  },[])

  return (
    <div className='bg-black'>
      <NavBar/>
      {/*FIRST CONTAINER */}
  <div className=' container  mt-[50px]  md:mt-[100px]   text-[#F0F2F5]  font-bold w-full md:w-[900px] h-full  text-center text-wrap  ' >
       <p className='text-5xl font-semibold md:text-7xl  '> Empower Your Coding 
     
      Journey
      </p> 
      </div>

      <div className='container mt-[30px] w-full md:w-[800px] h-full text-center text-[#B0B0B0] text-sm  md:text-x font-poppins md:p-[10px]'>
        <p >
        This platform is designed to empower you, a junior programmer, on your 
        <br />
        journey to mastering the art of coding. Whether you're a complete 
        <br />
        beginner or have some basic experience, we offer a comprehensive
        <br />
         and engaging learning experience to propel you forward.
        </p>
      </div>

      <div className=" mt-[30px] flex justify-center">
        
     <PageButton actionText='Contact Me' />
   </div>


{/* IMAGE FIGURE */}
<PageImageFigure />




{/* LEARNING PATH */}
   <div className='container  mt-[100px] w-full md:w-[522px] h-full'>
    <p className='text-[#F0F2F5] text-center  text-4xl md:text-6xl  font-semibold'>Clear Learning Paths</p>
   </div>
   <div className='container  mt-[20px] md:mt-[30px] w-full md:w-[700px] h-full md:text-lg	'>
    <p className='text-[#B0B0B0] text-center  font-poppins text-sm'>We offer well-structured learning paths for various popular programming languages, building your skills progressively from the fundamentals to more advanced concepts.</p>
   </div>
   

   <div  className='container w-full h-full mt-[10px] md:mt-[30px] flex flex-row   flex-wrap md:w-[600px] md:gap-x-[10px] md:gap-y-[10px]'>
   <SkillConatiner skillName="Golang"/>  
   <SkillConatiner skillName="Docker" />  
   <SkillConatiner skillName="Kubernetes" />  
   <SkillConatiner skillName="ReastJs"/>  
   <SkillConatiner skillName="AWSCloud"/>  
   <SkillConatiner skillName="Typescript"/>  
   <SkillConatiner skillName={`GithubAction`}/>  
   </div>
  {/* CODE EXAMPLES */}
   <div className='md:container text-white mt-[100px] md:flex  md:justify-center md:items-center    '>
    <div className='container  '>
      <p className='text-center md:text-left text-[#F0F2F5] font-semibold text-3xl md:text-5xl'>
        Code Examples
      </p>
      <p className='text-center text-[#B0B0B0] mt-[20px] font-poppins text-sm md:w-[310px] md:text-left'>
      Learning by doing is paramount! We provide you with access to a wealth of code examples for each topic. You can practice your newfound skills in dedicated coding zones, allowing you to experiment and solidify your understanding.
      </p>
      <button className='mt-[20px] border border-[#FDF7F2] text-[#FDF7F2] font-regular text-[17px] font-poppins py-2 px-4 rounded-lg center' onClick={()=> onNavigate()}>
       <div className='flex flex-row justify-center items-center gap-x-[5px] md:gap-x-0'>
       Access Ressources
       <ChevronRightIcon className='h-4 w-4 pt-[2px]'/>
       </div>
      </button>
    
    
    
    </div>
        
          
    <div className='container mt-[20px] relative'>
        <img src={skillCodeImage} alt="" className='h-auto w-full  ' />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000]"></div>

      </div>
   </div>
  
  {/* TUTORIAL */}
   <div className='container mt-[100px] text-white '>
    <p className='text-xl text-center text-[#F0F2F5] font-coolvetica font-medium'>Tutorials</p>
    <TutorialsComponent tutorials={tutorials} loading={tutorialFetchloading}/>
   </div>

   <div className='container mt-[100px]  text-white'>
    <p className='text-xl text-center text-[#F0F2F5] font-coolvetica font-medium'>Posts</p>
    <PostsComponent posts={posts} loading={postFetchloading}/>
   </div>

<Footer />
    </div>
  )
}





type Props = {
  skillName: string
}

 const SkillConatiner = (props: Props)=> {
  return (
    <div  className='container  w-[140px]  h-[40px] mt-[10px] flex items-center justify-center bg-[#141414] '>

    <div className='flex flex-row gap-x-[5px] items-center justify-center '>
      <div>
      <PlusIcon className='h-4 w-4 text-white'/>
      </div>
     
      
      <p className=' text-white text-base  font-medium font-poppins'>{props.skillName}</p>
    </div>
   </div>
  )
}

export  {HomePage}
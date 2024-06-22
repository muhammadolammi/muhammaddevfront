import code from '../images/code1.png';
import skillCodeImage from '../images/skillcode.png'; // Import the placeholder image


import React, { useEffect, useState } from 'react'
import NavBar from '../common/NavBar'
import Footer from '../common/Footer';
import ActionButton from '../common/ActionButton';
import { PlusIcon , ChevronRightIcon} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router';
import { PostsComponent, TutorialsComponent } from '../components/ContentsComponent';
import { Post, Tutorial } from '../db/models';
import { fetchPosts } from '../db/posts';
import { fetchTutorials } from '../db/tutorial';


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
      <div className=' container  mt-[50px]   text-[#F0F2F5]  font-bold w-full md:w-[1032px] h-full  text-center  ' >
       <p className='text-5xl font-semibold   '> Empower Your Coding 
     
      Journey
      </p> 
      </div>

      <div className='container mt-[30px] w-full md:w-[819px] h-full text-center text-[#B0B0B0] text-sm  font-poppins text'>
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
        
        <ActionButton actionText='Contact Me' />
</div>
{/* <div className='container mt-[100px] w-[1172px] h-[655.61px] relative'>
  <div className='absolute w-full h-full backdrop-filter blur-md'></div>
  <img className='container  mt-[100px] max-w-[973.18px] max-h-[655.61px] backdrop-blur-xl rounded-lg	' src={code} alt="" />
</div> */}

<figure className=" container  mt-[60px]  max-w-xl h-[300px] flex justify-center items-center ">
<div className='relative'>
  
<img className="  rounded-lg  mt-[100px]  "  src={code} alt=''/>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000]"></div>

</div>
  
</figure>

   <div className='container  mt-[200px] w-full md:w-[522px] h-full'>
    <p className='text-[#F0F2F5] text-center  text-4xl font-semibold'>Clear Learning Paths</p>
   </div>
   <div className='container  mt-[20px] md:mt-[20px] w-full md:w-[700px] h-full'>
    <p className='text-[#B0B0B0] text-center  font-poppins text-sm'>We offer well-structured learning paths for various popular programming languages, building your skills progressively from the fundamentals to more advanced concepts.</p>
   </div>
   

   <div  className='container w-full h-full mt-[10px] flex flex-row flex-wrap'>
   <SkillConatiner skillName="Golang"/>  
   <SkillConatiner skillName="Docker" />  
   <SkillConatiner skillName="Kubernetes" />  
   <SkillConatiner skillName="ReastJs"/>  
   <SkillConatiner skillName="AWSCloud"/>  
   <SkillConatiner skillName="Typescript"/>  
   <SkillConatiner skillName={`GithubAction`}/>  
   </div>

   <div className='text-white mt-[100px]   md-flex-row  '>
    <div className='container'>
      <p className='text-center text-[#F0F2F5] font-semibold text-3xl'>
        Code Examples
      </p>
      <p className='text-center text-[#B0B0B0] mt-[20px] font-poppins text-sm'>
      Learning by doing is paramount! We provide you with access to a wealth of code examples for each topic. You can practice your newfound skills in dedicated coding zones, allowing you to experiment and solidify your understanding.
      </p>
      <button className='mt-[20px] border border-[#FDF7F2] text-[#FDF7F2] font-regular text-[17px] font-poppins py-2 px-4 rounded-lg center' onClick={()=> onNavigate()}>
       <div className='flex flex-row justify-center items-center gap-x-[5px]'>
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
   <div className='container mt-[100px] text-white'>
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
    <div  className='container  w-[140px] h-[40px] mt-[10px] flex items-center justify-center bg-[#141414] '>

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
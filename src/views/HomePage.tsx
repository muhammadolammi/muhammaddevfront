import React from 'react';
import "../css/homepage.css"


import { fetchTutorials } from '../db/tutorial';
import { useState , useEffect} from 'react';
import { Post, Tutorial } from '../db/models';
import { fetchPosts } from '../db/posts';
import { ContentsComponent } from '../components/ContentsComponent';
import SizedBox from '../common/SizedBox';
import NavBar from '../common/NavBar';
import placeholder from '../images/placeholder.png'; // Import the placeholder image
import { FieldContainer } from '../components/FieldContainer';
import SectionTitle from '../common/SectionTitle';

// import{Tutorial} from './models';

const HomePage =() => {
   const [tutorials, setTutorials] = useState<Tutorial[]>([])
   const [posts, setPosts] = useState<Post[]>([])

   const [loading, setLoading] = useState<boolean>(true);

  

   useEffect(()=>{
    //get tutorials func
    const getTutorials = async () => {
      try {
        const tutorialList = await fetchTutorials();
        // console.log(tutorialList); // Check what tutorialList contains
        setTutorials(tutorialList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    //get posts func
    const getPosts = async () => {
      try {
        const postList = await fetchPosts();
        // console.log(postList); // Check what tutorialList contains
        setPosts(postList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tutorials:', error);
        setLoading(false); // Set loading to false to avoid indefinite loading state
      }

    };

    getTutorials();
    getPosts();
   },[])

  
  
   return (
    <div className="Homepage">
   <NavBar />
  <div className="Body">
      {/* The Me Box */}
    
      <div className="Container ">
      <div className="Me-Box">
        <div className="Intro">
        Hi, I'm
       
        </div>
       
       <div className="Name">
       Muhammad Akewukanwo
        </div> 
        <div className="Proffesion">
       Software Engineer
        </div>
      <div className="About">
      Passionate about building scalable web applications and optimizing system operations. With extensive experience in both front-end and back-end development, and a deep understanding of DevOps practices, I strive to deliver seamless user experiences and robust infrastructure solutions.

        </div> 
        <button>Contact Me</button>
        {/* <div className="Buttons">
         
          <button>Check My Resume</button>
          <button>Contact Me</button>
       
        
          </div>  */}

      
      </div>
      </div>

      {/* The About Box */}
      <div className="AboutMe-Container">
          <div className="AboutMe-Box">
            <SectionTitle title='About Me'/>
                  <div className="AboutMe-Details">
                   <div className="AboutMe-Content">
                   <div className="AboutMe-ContentText">
                  <span>
                     <b>I am</b> a dedicated and skilled SoftWare Engineer with a passion for coding and a knack for problem-solving. My journey in the tech world has equipped me with a comprehensive skill set that spans across various programming languages and development tools. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies or sharing my knowledge through tutorials and blogs.
                   </span>
                    </div>

                   
                  
                  <button className='AboutMe-ContentButton'>Read My Resume</button>
                 
                   </div>
                    <div className="AboutMe-DetailsImage">
                    <img  src={placeholder} alt="" />
                    </div>
                    
                    
                  </div>
            </div>
      </div>
     {/* Fields and Skills */}
     <div className="Skills-Container">
       <SectionTitle title='Skills'/>
        <div className="Fields-list">
          <FieldContainer fieldName='Back-end Development' skills={[
          {skill:"Golang", description:"Advance", logo:placeholder},
          {skill:"Docker", description:"Advance", logo:placeholder},
          {skill:"Golang", description:"Advance", logo:placeholder},
          {skill:"Docker", description:"Advance", logo:placeholder},
          {skill:"Golang", description:"Advance", logo:placeholder},
          {skill:"Docker", description:"Advance", logo:placeholder},
          ]} height={419}/>
     <FieldContainer fieldName='Front-end Development' skills={[
            {skill:"React TypeScript", description:"Advance", logo:placeholder},
          {skill:"Flutter", description:"Advance", logo:placeholder},
          ]} height={294}/>
          
          <FieldContainer fieldName='Dev Ops' skills={[
          {skill:"Github Actions", description:"Advance", logo:placeholder},
          
          ]} height={196}/>
    
        </div>
         
           {/* <FieldContainer fieldName='Dev Ops' skills={[
          {skill:"Github Actions", description:"Ci/CD Tool"},
          
          ]} /> */}
     </div>

{/* Projects */}
<div className="Projects-Container">
<SectionTitle title='Projects'/>

</div>
      <div className="contentsTitle">
            <h1>Tutorials</h1>
        </div>
       <ContentsComponent loading={loading} contents={tutorials} contentsType='Tutorials'/>
     <SizedBox  height={100}/>
       <div className="contentsTitle">
            <h1>Posts</h1>
        </div>
   
        <ContentsComponent loading={loading} contents={posts} contentsType='Posts'/>

      </div>


 
  </div>  
  );
}

export { HomePage};




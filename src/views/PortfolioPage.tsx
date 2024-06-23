import React from 'react';


import { fetchTutorials } from '../db/tutorial';

import { fetchPosts } from '../db/posts';
import SizedBox from '../common/SizedBox';
import NavBar from '../common/NavBar';
import placeholder from '../images/placeholder.png'; // Import the placeholder image
import { FieldContainer } from '../components/FieldContainer';
import SectionTitle from '../common/SectionTitle';

// import{Tutorial} from './models';

const PortfolioPage =() => {
 

  
  
   return (
    <div  className='bg-black'>
   <NavBar />
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

      {/* The About Me */}
    
          <div >
            <SectionTitle title='About Me'/>
                  <span>
                     <b>I am</b> a dedicated and skilled SoftWare Engineer with a passion for coding and a knack for problem-solving. My journey in the tech world has equipped me with a comprehensive skill set that spans across various programming languages and development tools. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies or sharing my knowledge through tutorials and blogs.
                   </span>
                    <button >Read My Resume</button>

                    <img  src={placeholder} alt="" />

      </div>
     {/* Fields and Skills */}
     <div >
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
</div>

  );
}

export { PortfolioPage};




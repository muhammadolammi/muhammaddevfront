import React from 'react';


import skillCodeImage from '../assets/images/skillcode.png'; // Import the placeholder image
import logo from '../assets/images/logo.png'
import gochatlogo from '../assets/images/gochatlogo.jpg'
import questionbanklogo from '../assets/images/questionbanklogo.jpg'


import NavBar from '../common/NavBar';
import placeholder from '../assets/images/placeholder.png'; // Import the placeholder image
import { FieldContainer } from '../components/FieldContainer';
import { ChevronRightIcon, FaceSmileIcon} from "@heroicons/react/24/solid"
import AmpersandIcon from '../assets/images/ampersnad';
import { PageButton } from '../common/ActionButton';
import { PageImageFigure } from '../common/PageImageFigure';
import Footer from '../common/Footer';
import { ProjectComponent } from '../components/ProjectComponent';


// import{Tutorial} from './models';

const PortfolioPage =() => {
 

  
  
   return (
    <div  className='bg-black'>
   <NavBar />
      {/* The Me Box */}
    
     <div className='container  flex flex-col gap-y-[10px] mt-[100px] md:mt-[100px] text-white text-center '>
  <div className=' container  flex items-center  justify-center gap-x-[5px] text-[#F0F2F5] font-coolvetica'>
  <p className='text-xl'>Hi, Im  </p>
  <FaceSmileIcon className='w-4 h-4 text-[#FFCC4D] '/>
  </div>
  
   <p className='font-semibold font-clash-grotesk text-5xl text-[#F0F2F5]'>Muhammad Olamide</p>
  <div className='container flex flex-col items-center justify-center text-[#F0F2F5] text-xl'>
     <p>Software Engineer </p>
     <AmpersandIcon />
     <p>DevOps Engineer</p>
     </div>
     <div className='container mt-[10px] '>
     <p className='text-[12px] text-wrap w-full'>
     Passionate about building scalable web applications and optimizing system operations. With extensive experience in both front-end and back-end development, and a deep understanding of DevOps practices, I strive to deliver seamless user experiences and robust infrastructure solutions.
     </p>
     </div>
<div className='mt-[10px]'>
<PageButton actionText='Contact Me' />
</div>


     
     </div>
    
    {/* IMAGE FIGURE */}
    <PageImageFigure />
    

    {/* About Me */}
   
    <div className='mt-[100px] container flex flex-col md:flex-row w-full h-[500px] gap-x-[10px] gap-y-[10px] justify-center items-center'>
 
    <div className='  '>
      <p className='text-center md:text-left text-[#F0F2F5] font-semibold text-3xl md:text-5xl'>
        About Me
      </p>
      <p className='text-left text-[#B0B0B0] mt-[20px] font-poppins text-sm md:w-[310px] md:text-left'>
      I am a dedicated and skilled Software Developer and DevOps Engineer with a passion for coding and a knack for problem-solving. My journey in the tech world has equipped me with a comprehensive skill set that spans across various programming languages and development tools. I enjoy turning complex problems into simple, beautiful, and intuitive designs. When I'm not coding, you'll find me exploring new technologies or sharing my knowledge through tutorials and blogs.      </p>
      <button className='mt-[20px] border border-[#FDF7F2] text-[#FDF7F2] font-regular text-[17px] font-poppins py-2 px-4 rounded-lg center'
              onClick={() => document.getElementById('downloadLink')!.click()}

      >
       <div className='flex flex-row justify-center items-center gap-x-[5px] md:gap-x-0'>
       Download CV
       <ChevronRightIcon className='h-4 w-4 pt-[2px]'/>
      
       </div>
      </button>
    
    
    
    </div>
        
          
    <div className='container m-[20px] relative '>
        <img src={skillCodeImage} alt="" className='h-[200px] w-full  ' />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000]"></div>

      </div>
</div>

     {/* Fields and Skills */}
     <div className='container text-white mt-[100px] '>
      <p className='text-center text-3xl text-[#F0F2F5] font-semibold font-clash-grostek mb-[10px]'> Skills</p>
        <div className='flex flex-col gap-y-[50px]'>
        <FieldContainer fieldName='Back-end Development' skills={[
          {skill:"Golang", description:"Advance", logo:placeholder},
          {skill:"Python", description:"Advance", logo:placeholder},
          {skill:"REST-API", description:"Advance", logo:placeholder},
          {skill:"Docker", description:"Advance", logo:placeholder},
          {skill:"Linux", description:"Advance", logo:placeholder},
          {skill:"PostgreSql", description:"Advance", logo:placeholder},
          ]} />
     <FieldContainer fieldName='Front-end Development' skills={[
            {skill:"React TypeScript", description:"Advance", logo:placeholder},
          {skill:"Flutter", description:"Advance", logo:placeholder},
          ]} />
          
          <FieldContainer fieldName='Dev Ops' skills={[
          {skill:"Github Actions", description:"Advance", logo:placeholder},
          {skill:"Terraform", description:"Advance", logo:placeholder},
          
          ]} />
        </div>
    
        </div>

      {/* Projects */}
      <div className='container text-white mt-[100px]  '>
        <p className='text-center text-3xl text-[#F0F2F5] font-semibold font-clash-grostek mb-[10px]'> Projects</p>
       <div className='flex flex-col gap-y-[100px] mt-[60px]'>
        
       <ProjectComponent  Name='MuhammadDev' Description='
Developed a full-stack web app using Golang for the REST API and React for the frontend, implemented manual authentication with Golang’s crypto/bcrypt and JWT, set up CI/CD with GitHub Actions for deployment and updates, hosted the backend on a Linux server with Nginx for SSL and port-forwarding to Docker containers, hosted the frontend on Firebase, and used GitHub Actions to back up PostgreSQL data and CI/CD implementation.'
 Logo = {logo} 
 Links={[
  { LinkName: "Github", LinkUrl: "https://github.com/muhammadolammi/muhammaddev" }, 
  { LinkName: "Site Url", LinkUrl: "https://muhammaddev.com" }
]}
  />
        <ProjectComponent Name='GoChat'  Description="Developed a CLI-based application for using a ChatGPT clone directly in the terminal, with an option to save chats to a directory in the user's home for convenience, eliminating the need to open Chrome for each session."
         Logo= {gochatlogo} 
         Links={[
          { LinkName: "Github", LinkUrl: "https://github.com/muhammadolammi/gochat" }, 
        ]}/>
        <ProjectComponent Name='QuestionBank Generator'  Description='Generated a question bank using Google Gemini with up to 10,000 multiple-choice questions, saved as JSON files, and migrated to documents using Python.'
         Logo= {questionbanklogo} 
         Links={[
          { LinkName: "Github", LinkUrl: "https://github.com/muhammadolammi/questionbankgenerator" }, 
        ]}/>
        {/* <ProjectComponent Name='Naijalocation'  Description='' 
        Logo= {placeholder}/> */}
       </div>

      </div>
        <Footer />
</div>

  );
}

export { PortfolioPage};




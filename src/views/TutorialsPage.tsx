



import NavBar from '../common/NavBar';


type Props = {}

const TutorialsPage =  (props: Props) => {

      return(
      <div className='bg-black'>
      <NavBar/> 
      <div className='body'>
         <div className=' mt-[50px] w-full bg-red-800 h-[300px]'>

         </div >
             
         <div className=' mt-[50px] w-full bg-red-800 h-[300px] text-white'>
          <p>Recent</p>


         </div>
         <div className=' mt-[50px] w-full bg-red-800 h-[300px] text-white'>
          <p>Must Read</p>


         </div>
      </div>
        </div>
      )
    
 
    

}

export default TutorialsPage
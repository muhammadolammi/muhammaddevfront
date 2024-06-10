import { useState } from "react";
import { useNavigate } from "react-router";
import { deletePost } from "../db/posts";
import { deleteTutorial } from "../db/tutorial";

export const ThreeDotButton: React.FC<{ 
    contentType: string, 
   contentId:string, contentTitle:string}> = ({ contentType, contentId , contentTitle})=>{
   const navigate = useNavigate()
    const onEdit=() =>{
        if(contentType==='Tutorial') {
            // TODO delete Tutorial
            navigate(`/edittutorial/${contentTitle}`)
        }
        if(contentType==='Post') {
            navigate(`/editpost/${contentTitle}`)
        }

    }
    const onDelete= async() =>{
        if(contentType==='Tutorial') {
            // TODO delete Tutorial
            alert("This will Permanently Delete this utorial Data!!!")
            deleteTutorial(contentId)
        }
        if(contentType==='Post') {
            // TODO delete Post
            alert("This will Permanently Delete this Post Data!!!")
           try{
            await deletePost(contentId)
           
           }catch(e){
            console.log(e)
            alert(e)
             throw (e)
           }
        }
    }
      const [showOptions, setShowOptions] = useState(false);
  
    const toggleOptions = () => {
      setShowOptions(!showOptions);
    };
  
  
  
    // You can add more options similarly
  
    return (
      <div className="three-dot-button">
        <button onClick={toggleOptions}>&#8942;</button>
        {showOptions && (
          <div className="options-container">
            <button onClick={()=>{onEdit()}}>Edit {contentType}</button>
            <button onClick={()=>{onDelete()}}>Delete {contentType}</button>
            {/* Add more options here */}
          </div>
        )}
      </div>
    );
  };
import { useState } from "react";
import { useNavigate } from "react-router";
import { mainUrl } from "../env";
import { deletePost } from "../db/posts";
import { deleteTutorial } from "../db/tutorial";

export const ThreeDotButton: React.FC<{ 
    contentType: string, 
   contentId:string}> = ({ contentType, contentId })=>{
   const navigate = useNavigate()
    const onEdit=(contentId: string) =>{
        if(contentType==='Tutorial') {
            // TODO delete Tutorial
            navigate(`/edittutorial/${contentId}`)
        }
        if(contentType==='Post') {
            navigate(`/editpost/${contentId}`)
        }

    }
    const onDelete= async(contentId: string) =>{
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
            <button onClick={()=>{onEdit(contentId)}}>Edit {contentType}</button>
            <button onClick={()=>{onDelete(contentId)}}>Delete {contentType}</button>
            {/* Add more options here */}
          </div>
        )}
      </div>
    );
  };
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { storage } from "../firebase"
import {v1} from "uuid"


const uploadImage = (imageFile: File|null, folder:string):Promise<string>=> {
if (!imageFile){
    return Promise.reject('No image file provided');
 
}
    const imageRef = ref(storage, `${folder}/${imageFile.name + v1()}` )
   return uploadBytes( imageRef, imageFile).then(()=> getDownloadURL(imageRef)
    
    ).catch(e=>{
        console.error('Error uploading image:', e);
        throw e;
        
      
    })
}

const deleteImage = async (imageUrl: string)=> {

    try {
        const imageRef = ref(storage, imageUrl);
        await deleteObject(imageRef);
      } catch (error) {
        console.error(error);
      }
    }

export {uploadImage , deleteImage}

// import { resolveCaa } from 'dns'
import{apiKey, apiUrl} from '../env'
import { Tutorial } from './models'
import { fetchData } from './getData'
const fetchTutorials =  async ():Promise<Tutorial[]> => {
    try{ 
        const tutorials = await fetchData<[Tutorial]>(`${apiUrl}/tutorials`??"", )
        
        // tutorialsRes.then(res=>{
        //   // TODO remove console.log
        //   console.log(res)
        //   return res

          
        // }).catch(e=>{console.log(e)})
        return tutorials
}catch (e){
  console.log(e)
  return []
}
 
   
}


const fetchTutorialsFromPlaylist =  async (playlistId:string):Promise<Tutorial[]> => {
  try{ 
      const tutorials = await fetchData<[Tutorial]>(`${apiUrl}/tutorials/${playlistId}`??"", )
      
      // tutorialsRes.then(res=>{
      //   // TODO remove console.log
      //   console.log(res)
      //   return res

        
      // }).catch(e=>{console.log(e)})
      return tutorials
}catch (e){
console.log(e)
return []
}}


const publishTutorial = async (tutorial:Tutorial) =>{
  
  try {
    const response = await fetch(`${apiUrl}/tutorials`, {
      method: 'POST', // Specify the request method
      headers: {
        "Authorization": apiKey?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: JSON.stringify(tutorial), // Convert the tutorial object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    alert("Tutorial published successfully")
    console.log('Tutorial published successfully:', data);

  } catch (error) {
    console.error('Error publishing tutorial:', error);
  }
 
   
  
}

const deleteTutorial = async (tutorialID:string) =>{
  
  try {
    const response = await fetch(`${apiUrl}/tutorial/${tutorialID}`, {
      method: 'DELETE', // Specify the request method
      headers: {
        "Authorization": apiKey?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
          });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // const data = await response.json();
    alert("Tutorial Deleted successfully")

  } catch (error) {
    console.error('Error deleting tutorial:', error);
  }
 
   
  
}


const editTutorial = async (tutorial:Tutorial) =>{
  
  try {
    const response = await fetch(`${apiUrl}/tutorial/${tutorial.id}`, {
      method: 'PUT', // Specify the request method
      headers: {
        "Authorization": apiKey?? "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      
      body: JSON.stringify(tutorial), // Convert the tutorial object to JSON
    });

    // Check if the response status is OK
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // const data = await response.json();
    alert("Tutorial Edited successfully")

  } catch (error) {
    console.error('Error editing tutorial:', error);
  }
 
   
  
}


const getTutorialWithId = async (id: string):Promise<Tutorial> => {
  try {
    const response = await fetch(`${apiUrl}/tutorial/${id}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    return data.data as Tutorial;

  } catch (error) {
    console.error('Error fetching Tutorial:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};


const getTutorialWithTitle = async (title: string):Promise<Tutorial> => {
  try {
    const response = await fetch(`${apiUrl}/gettutorial/${title}`, {
      method: 'GET'
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
  
    return data.data as Tutorial;

  } catch (error) {
    console.error('Error fetching Tutorial:', error);
    throw error; // Ensure the error is propagated to the caller
  }
};

export{fetchTutorials, publishTutorial, getTutorialWithId, editTutorial, deleteTutorial, fetchTutorialsFromPlaylist, getTutorialWithTitle}


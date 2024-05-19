
// import { resolveCaa } from 'dns'
import{apiUrl} from '../env'
import { Tutorial } from '../models'
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


export{fetchTutorials}
 import axios from "axios";

 const commonAPI = async(httpmethod,url,reqbody,reqHeader)=>{
    
    const reqConfig = {
        method:httpmethod,
        url,
        data:reqbody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }
    return await axios(reqConfig).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
 }

 export default commonAPI
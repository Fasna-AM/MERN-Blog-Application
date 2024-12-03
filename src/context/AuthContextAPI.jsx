import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const tokenAuthContext = createContext()

const AuthContextAPI = ({children}) => { 

   const  [isAutherised,setIsAutherised] = useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setIsAutherised(true)
        }else{
            setIsAutherised(false)
        }
    },[isAutherised])

  return (
   
    <tokenAuthContext.Provider value={{isAutherised,setIsAutherised}}>
        {children}
    </tokenAuthContext.Provider>
    
    
  )
}

export default AuthContextAPI
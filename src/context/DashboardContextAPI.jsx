import React, { createContext, useState } from 'react'


export const dashboardLoadContext = createContext()
export const removeNotificationResponseContext = createContext()
export const editBlogResponseContext = createContext()
export const deleteBlogResponseContext = createContext()
export const removeFavoritesResponseContext = createContext()

const DashboardContextAPI = ({children}) => {
    const [isOwnerDashboard,setIsOwnerDashboard] = useState(false)
    const [removeNotificationResponse,setRemoveNotificationResponse] = useState("")
    const [editBlogResponse,setEditBlogResponse] = useState("")
    const [deleteBlogResponse,setDeleteBlogResponse] = useState("")
    const [removefavoritesResponce,setRemoveFavoritesResponse] = useState("")

  return (
  <removeFavoritesResponseContext.Provider value={{removefavoritesResponce,setRemoveFavoritesResponse}}>
    <deleteBlogResponseContext.Provider value={{deleteBlogResponse,setDeleteBlogResponse}}>
    <editBlogResponseContext.Provider value={{editBlogResponse,setEditBlogResponse}}>
     <removeNotificationResponseContext.Provider value={{removeNotificationResponse,setRemoveNotificationResponse}}>
     <dashboardLoadContext.Provider value={{isOwnerDashboard,setIsOwnerDashboard}}>
        {children}
    </dashboardLoadContext.Provider>
   </removeNotificationResponseContext.Provider>
  </editBlogResponseContext.Provider>
  </deleteBlogResponseContext.Provider>
  </removeFavoritesResponseContext.Provider>
  )
}

export default DashboardContextAPI
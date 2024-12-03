
import SERVER_URL from './ServerUrl'
import commonAPI from './commonAPI'

//register
export const registerAPI = async(reqbody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqbody)
}


// login
export const loginAPI = async(reqbody)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,reqbody)
}

// addblog
export const addBlogAPI = async(reqbody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/addBlog`,reqbody,reqHeader)
}

//getblogs
export const getAllBlogsAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getallblogs?search=${searchKey}`,{},reqHeader)
}

//getUser
export const getUserAPI =async(id,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/author/${id}`,{},reqHeader)
}

//getAutherBlogs
export const getAutherBlogsAPI = async(id,reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/blogs/${id}`,{},reqHeader)
}

//updateBlog
export const updateBlogAPI = async(id,reqbody,reqHeader) =>{
    return await commonAPI("PUT",`${SERVER_URL}/blogs/${id}/updateBlog`,reqbody,reqHeader)
}

//updateLike
export const updateLikeAPI = async (id,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/blogs/${id}/updateLike`,{},reqHeader)
}

//updateUnLike
export const updateUnLikeAPI = async (id,likeCount,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/blogs/${id}/${likeCount}/updateUnLike`,{},reqHeader)
}

//addFavorites
export const addFavoritesAPI = async(id,reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/author/${id}/addfavorite`,reqbody,reqHeader)
}

//addlikeBlog
export const addLikeBlogAPI = async (id,reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/author/${id}/addlikeBlog`,reqbody,reqHeader)
}

//addnotification
export const addNotificationAPI = async (id,reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/author/${id}/addnotification`,reqbody,reqHeader)
}

//removeNotification
export const removeNotificationAPI = async(reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/author/removeNotification`,{},reqHeader)
}


//removeFavorites
export const removeFavoritesAPI = async(id,reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/author/${id}/removefavorite`,reqbody,reqHeader)
}

//removelikeBlog
export const removeLikeBlodAPI = async(id,reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/author/${id}/removelikeBlog`,reqbody,reqHeader)
}



//updateprofile
export const updateProfileAPI = async(reqbody,reqHeader)=>{
    return await commonAPI("PUT",`${SERVER_URL}/editProfile`,reqbody,reqHeader)
}

//deleteBlog
export const deleteBlogAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/blogs/${id}/delete`,{},reqHeader)
}

//changepwd
export const changePwdAPI = async(id,currentpwd,newpwd,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/authors/${id}/${currentpwd}/${newpwd}/changePwd`,{},reqHeader)
}

//homeBlogs
export const homeblogAPI = async()=>{
    return await commonAPI("get",`${SERVER_URL}/homeblog`,{},{})
}
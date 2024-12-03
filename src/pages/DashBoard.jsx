import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import userImg from '../assets/userImg.jpg'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getAllBlogsAPI, getAutherBlogsAPI, getUserAPI } from '../services/allAPIs'
import View from '../components/View'
import { dashboardLoadContext, deleteBlogResponseContext, editBlogResponseContext } from '../context/DashboardContextAPI'
import SERVER_URL from '../services/ServerUrl'



const DashBoard = ({ insideBlogs }) => {

  const {isOwnerDashboard,setIsOwnerDashboard} = useContext(dashboardLoadContext)
  const {deleteBlogResponse,setDeleteBlogResponse} =useContext(deleteBlogResponseContext)
  const {editBlogResponse,setEditBlogResponse} =useContext(editBlogResponseContext)
  const [blogDetails, setBlogDetails] = useState([])
  const [autherDetails, setAutherDetails] = useState({})
  const [isOwner,setIsOwner]= useState("")
  const [preview,setPreview] = useState("")



  useEffect(() => {
    const id = sessionStorage.getItem("blogerId")
    fetchUser(id)
    fetchBlogs(id)
    // console.log(id);
    if(sessionStorage.getItem("isOwner")){
      setIsOwner(sessionStorage.getItem("isOwner"))
    }
    
  },[isOwnerDashboard,deleteBlogResponse,editBlogResponse])

  useEffect(()=>{
    if(autherDetails.profileImg){
      setPreview(URL.createObjectURL(autherDetails.profileImg))
    }else{
      setPreview("")
    }
  },[])

  const fetchUser= async(id)=>{
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
        
        const result = await getUserAPI(id,reqHeader)
        // console.log(result);

        if(result.status==200){
          setAutherDetails(result.data)
          
          sessionStorage.setItem("autherDetails",JSON.stringify(result.data))

        }
      }catch(err){
        console.log(err);
        
      }
    }
  }

  const fetchBlogs = async (id)=>{
    
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await getAutherBlogsAPI(id,reqHeader)
        if(result.status==200){
          // console.log(result);
          
          setBlogDetails(result.data)

          sessionStorage.setItem("blogDetails",JSON.stringify(result.data))

        }
      }catch(err){
        console.log(err);
        
      }
    }
  }
  // console.log(autherDetails);
  // console.log(blogDetails);
  // console.log(isOwner);
  

  return (
    <>
      <Header/>
      <div className=' container mt-5   '>
        <Row >
          <Col sm={12} md={7} lg={9}>
            <div className='d-flex  justify-content-between'>
              <h6>Blog Published</h6>
              <Link to={'/settings'} className="btn">Settings</Link>
            </div>

            <hr />
            <View displaydata={blogDetails}  isOwner={isOwner}/>
          </Col>
          <Col className=" d-flex flex-column justify-content-evenly" style={{ height: "550px" }}>
            <img src={autherDetails?.profileImg?`${SERVER_URL}/uploads/${autherDetails?.profileImg}`:userImg} alt="" width={"150rem"} height={"150rem"} className='rounded-circle' />
            <h6>{autherDetails.username}</h6>
            <p>{blogDetails.length} Blogs</p>
            <p>{autherDetails.Bio}</p>
            <div className="d-flex gap-4 ">
            { autherDetails?.instagram &&  <a href={autherDetails?.instagram} className='btn rounded-circle bg-black text-white d-flex justify-content-center align-items-center' target='_blank' style={{width:"40px",height:"40px"}}>
              <i className="fa-brands fa-instagram"></i>
              </a>
              }
             
             {autherDetails?.youTube && <a href={autherDetails?.youTube} className='btn rounded-circle bg-black text-white d-flex justify-content-center align-items-center ' target='_blank' style={{width:"40px",height:"40px"}}> 
              <i className="fa-brands fa-youtube"></i> </a>}
             
              {autherDetails?.facebook&&<a href={autherDetails?.facebook} className='btn rounded-circle bg-black text-white d-flex justify-content-center align-items-center' target='_blank'style={{width:"40px",height:"40px"}}>
              <i className="fa-brands fa-facebook"></i></a>}
              
              {autherDetails?.twitter &&<a href={autherDetails?.twitter} className='btn rounded-circle bg-black text-white d-flex justify-content-center align-items-center' target='_blank'style={{width:"40px",height:"40px"}}>
              <i className="fa-brands fa-twitter"></i></a>}
             
              {autherDetails?.github &&<a href={autherDetails?.github} className='btn rounded-circle bg-black text-white d-flex justify-content-center align-items-center' target='_blank'style={{width:"40px",height:"40px"}}>
             <i className="fa-brands fa-github"></i> </a>}
            
             {autherDetails?.linkedin &&<a href={autherDetails?.linkedin} className='btn rounded-circle bg-black text-white d-flex justify-content-center align-items-center' target='_blank'style={{width:"40px",height:"40px"}}>
              <i className="fa-brands fa-linkedin"></i> </a>}
            
              
            </div>
            <p>Joined on : {autherDetails.joinDate}</p>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default DashBoard
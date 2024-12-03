import React, { useContext, useEffect, useState } from 'react'
import { Button, Container, Navbar, Toast, ToastContainer } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import userImg from '../assets/userImg.jpg'
import addBlogImg from '../assets/addBlog .png'
import { tokenAuthContext } from '../context/AuthContextAPI'
import { dashboardLoadContext, removeNotificationResponseContext } from '../context/DashboardContextAPI'
import SERVER_URL from '../services/ServerUrl'
import { removeNotificationAPI } from '../services/allAPIs'


const Header = ({insidePnf , notification}) => {

  const {removeNotificationResponse,setRemoveNotificationResponse} = useContext(removeNotificationResponseContext)
  const {isAutherised,setIsAutherised}= useContext(tokenAuthContext)
  const {isOwnerDashboard,setIsOwnerDashboard} =useContext(dashboardLoadContext)
  const [autherDetailes,setAuthorDetails] = useState({})
  const navigate = useNavigate()
  const [preview,setPreview] = useState("")
  const [showA, setShowA] = useState(true);
 
// console.log(notification);


  useEffect(()=>{
    setAuthorDetails(JSON.parse(sessionStorage.getItem("author")))
  },[])



  useEffect(()=>{
    if(autherDetailes.profileImg){
      setPreview(URL.createObjectURL(autherDetailes.profileImg))
    }else{
      setPreview("")
    }
  },[])

 
  // console.log(notificatioLength);
// console.log(notification);



  const toggleShowA = async () => {
    setShowA(!showA)
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization": `Bearer ${token}`
      }
      try{

        const result = await removeNotificationAPI(reqHeader)
        sessionStorage.setItem("author",JSON.stringify(result.data))
        setRemoveNotificationResponse(result)

      }catch(err){
        console.log((err));
        
      }
      
    }
  };
  const toggleShowB = () => setShowA(!showA);

  const handleDashboard =()=>{
    // console.log(autherDetailes._id);
    sessionStorage.setItem("blogerId",autherDetailes._id)
    sessionStorage.setItem("isOwner","true")
    setIsOwnerDashboard(true)
    navigate('/dashboard')
  }
  const handleLogout=()=>{
    sessionStorage.clear()
    setIsAutherised(false)
    navigate('/')    
  }
  // console.log(isAutherised);
  
  return (
    <div>
       <Navbar className="p-3 bg-black">
        <Container>
          
            <Link to={'/'} className='text-white fw-bolder 'style={{textDecoration:"none",fontSize:"25px"}}>
              Blog
            </Link>

            {
              !insidePnf &&
              <div className="ms-auto ">
                <button className='btn text-white' style={{fontSize:"20px"}} onClick={toggleShowB} >
                  <i className="fa-solid fa-bell ">
                    {
                      notification?.length >0 &&
                      <span className='rounded-circle bg-danger p-1 align-items-center' style={{width:"5px",height:"5px"}}>{notification?.length}</span
                    >}
                    </i>
                  </button>
              <Link to={'/addBlog'} className='btn btn-link fw-bolder text-white me-4'style={{textDecoration:"none"}}><img src={addBlogImg} alt="" width={"30px"}/>  Write</Link>
              <button  className='btn ' onClick={handleDashboard}><img src={autherDetailes?.profileImg?`${SERVER_URL}/uploads/${autherDetailes?.profileImg}`:userImg} alt="" width={"70px"} height={"70px"} className='rounded-circle me-4'/></button>
            <button onClick={handleLogout} className='btn btn-link fw-bolder text-white'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
          </div>
          }
            
        </Container>
      </Navbar>

      {/* <Button onClick={toggleShowA} className="mb-2">
          Toggle Toast <strong>with</strong> Animation
        </Button> */}
        <ToastContainer
          className="p-3 mt-5"
          position="top-center"
          style={{ zIndex: 1}}
        >
        <Toast show={!showA}  onClose={toggleShowA} style={{marginTop:"3rem",width:"23rem",marginLeft:"20rem"}}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto text-black">Notifications</strong>
            <small></small>
          </Toast.Header>
          {
            notification?.length>0 ?
            notification.map((notification,index)=>(
              <Toast.Body key={index} className='tex-center fw-bolder'>{`${notification.likeAuthor}`}<span className='ms-2 fw-lighter'>Likes your Blog<img src={`${SERVER_URL}/uploads/${notification?.blogImg}`} width={"50px"} height={"50px"} className='rounded-circle ms-3' alt="" /></span></Toast.Body>

            ))
            :
            <p>No Notifications</p>
          }
        </Toast>

        </ToastContainer>
      
    </div>
    
  )
  
}

export default Header
import React, { useContext, useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'
import { getAllBlogsAPI } from '../services/allAPIs'
import { removeNotificationResponseContext } from '../context/DashboardContextAPI'


const Blogs = ({ insideBlogs }) => {

  const [allBlogs, setAllBlogs] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const [favorites,setFavorites] = useState([])
  const [likeBlogs,setLikeBlogs] = useState([])
  const [notification,setNotification] = useState([])
  const{removeNotificationResponse,setRemoveNotificationResponse} =useContext(removeNotificationResponseContext)



  useEffect(() => {
    fechAllBlogs()
    fechAllfavorites()
    fechallLikedBlogs()
    fechallnotification()
  }, [searchKey,removeNotificationResponse])
  
const fechallnotification = ()=>{
  const authorDetails = JSON.parse(sessionStorage.getItem("author"))
  const notification = authorDetails.notifications?.filter(notification=>notification.likeAuthor != authorDetails._id)
  setNotification(notification)
}

// console.log(notification);


  const fechallLikedBlogs =()=>{
    const authorDetails = JSON.parse(sessionStorage.getItem("author"))
    // console.log(authorDetails);
    
    setLikeBlogs(authorDetails.likedBlogs)
  }

  const fechAllBlogs = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getAllBlogsAPI(searchKey,reqHeader)
        if (result.status == 200) {
          setAllBlogs(result.data)
        }

      } catch (err) {
        console.log(err);

      }
    }
  }
  // console.log(allBlogs);
  const fechAllfavorites = ()=>{
    const authorDetails = JSON.parse(sessionStorage.getItem("author"))
    // console.log(authorDetails);
    
    setFavorites(authorDetails.favorites)
  }
  // console.log(favorites);

  return (
    <>
      <Header notification={notification}/>
      <div className="container-fluid mt-3" style={{minHeight:"70vh"}}>
        <div className="d-flex justify-content-between ">
          <h1>All Blogs</h1>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Blogs by their category' className='form-control w-25' />
        </div>
        <Row className='mt-3 '>
          {
            allBlogs?.length > 0 ?
              allBlogs.map(blog=>(
                <Col key={blog?._id} className='mb-3 ' sm={12} md={6} lg={3} >
                <BlogCard insideBlogs={true} displayData={blog} favorites={favorites} likeBlogs={likeBlogs}/>
              </Col>
              ))
          
          :
          
            <div className='text-danger'>
              Blog Not Found!!!
            </div>
          }

        </Row>

      </div>
      <Footer />
    </>
  )
}

export default Blogs
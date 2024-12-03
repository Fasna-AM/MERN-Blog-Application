import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import Edit from './Edit';
import SERVER_URL from '../services/ServerUrl';
import { addFavoritesAPI, addLikeBlogAPI, addNotificationAPI, deleteBlogAPI, getUserAPI, loginAPI, removeFavoritesAPI, removeLikeBlodAPI, updateBlogAPI, updateLikeAPI, updateUnLikeAPI } from '../services/allAPIs';
import { dashboardLoadContext, deleteBlogResponseContext, removeFavoritesResponseContext } from '../context/DashboardContextAPI';



const BlogCard = ({ insideBlogs, displayData, isOwner, favorites, likeBlogs }) => {

  const {removefavoritesResponce,setRemoveFavoritesResponse} =useContext(removeFavoritesResponseContext)
  const { isOwnerDashboard, setIsOwnerDashboard } = useContext(dashboardLoadContext)
  const { deleteBlogResponse, setDeleteBlogResponse } = useContext(deleteBlogResponseContext)
  const [show, setShow] = useState(false);
  const [userDetails, setUserDetails] = useState({})
  const navigate = useNavigate()
  const [blogDetails, setBlogDetails] = useState({})
  const [isliked, setIsliked] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  const [authorDetails, setAuthorDetails] = useState({})





  useEffect(() => {
    fetchUser()
    setBlogDetails(displayData)
    setAuthorDetails(JSON.parse(sessionStorage.getItem("author")))

  }, [])
  // console.log(authorDetails.favorites);
  useEffect(() => {
    const fav = favorites?.find(fav=>fav._id == displayData._id)
    if(fav){
      setIsSaved(true)
    }else{
      setIsSaved(false)
    }
  }, [])

  useEffect(()=>{
    const LbLog = likeBlogs?.find(likeBlog=>likeBlog._id == displayData._id)
    if(LbLog){
      setIsliked(true)
    }else{
      setIsliked(false)
    }
  },[])


  const fetchUser = async () => {

    const token = sessionStorage.getItem("token")
    const id = displayData.authorId
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getUserAPI(id, reqHeader)
        if (result.status == 200) {
          setUserDetails(result.data)

        }
      } catch (err) {
        console.log(err);

      }
    }
  }
  // console.log(userDetails);
  const handleDashboard = () => {
    sessionStorage.setItem("blogerId", displayData.authorId)
    sessionStorage.setItem("isOwner", "false")
    setIsOwnerDashboard(false)
    navigate('/dashboard')
  }


  const handleLike = async () => {
    setIsliked(true)
    const likeCount = blogDetails.likeCount + 1
    setBlogDetails({ ...blogDetails, likeCount: likeCount })
    // console.log(likeCount);

    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      try {
        const result = await updateLikeAPI(blogDetails._id, reqHeader)
        // console.log(result);
        const updateAuthor = await addLikeBlogAPI(authorDetails._id,blogDetails,reqHeader)
        if(updateAuthor.status==200){
          sessionStorage.setItem("author", JSON.stringify(updateAuthor.data))

        }
        const userNotification = await addNotificationAPI(userDetails._id,blogDetails,reqHeader)
        
        // console.log(userNotification);
        
      } catch (err) {
        console.log(err);

      }
    }
  }

  const handleUnLike = async () => {
    setIsliked(false)
    const likeCount = blogDetails.likeCount - 1
    setBlogDetails({ ...blogDetails, likeCount: likeCount })
    // console.log(likeCount);

    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }

      try {
        const result = await updateUnLikeAPI(blogDetails._id,likeCount, reqHeader)
        // console.log(result);
        const updateAuthor =  await removeLikeBlodAPI(authorDetails._id,blogDetails,reqHeader)
        sessionStorage.setItem("author", JSON.stringify(updateAuthor.data))

      } catch (err) {
        console.log(err);

      }
    }

  }

  const handleUnsaved = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await removeFavoritesAPI(authorDetails._id, blogDetails, reqHeader)
        // console.log(result);
        sessionStorage.setItem("author", JSON.stringify(result.data))
        setIsSaved(false)
        setRemoveFavoritesResponse(result)

      } catch (err) {
        console.log(err);

      }
    }
  }
  const handleFavorites = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await addFavoritesAPI(authorDetails._id, blogDetails, reqHeader)
        console.log(result);
        if(result.status==200){
          sessionStorage.setItem("author", JSON.stringify(result.data))

        }
        setIsSaved(true)


      } catch (err) {
        console.log(err);

      }
    }
  }

  const deleteBlog = async (id) => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        await deleteBlogAPI(id, reqHeader)
        setDeleteBlogResponse(true)
      } catch (err) {
        console.log((err));

      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log(displayData);
  // console.log(blogDetails);


  return (
    <div className='my-5'>
      <Card className=' shadow' style={{ width: '20rem', height: "35rem" }}  >
        <Card.Img style={{ cursor: "pointer", height: "12rem" }} onClick={handleShow} variant="top" src={`${SERVER_URL}/uploads/${displayData?.blogImg}`} />
        <Card.Body className='d-flex flex-column' >
          <Card.Title className='text-center fw-bolder'> {displayData?.tiltle}</Card.Title>
          <button onClick={handleDashboard} className=' btn btn-link  text-warning d-flex justify-content-center' style={{ textDecoration: "none" }}>
            {userDetails?.username}
          </button>
          {
            insideBlogs &&

            <>
              <Card.Text style={{ textAlign: "justify" }}>
                {displayData?.subhead}
              </Card.Text>

              <div className='d-flex justify-content-between mt-3'>
                <p className='rounded px-2 py-1 fw-bolder' style={{ backgroundColor: "gray", }}>{displayData?.category}</p>
                <div >
                  {isliked ?
                    <>
                      <i onClick={handleUnLike} className="fa-solid text-danger fa-heart m-2" style={{ cursor: "pointer" }}><span className='text-black '>{blogDetails.likeCount}</span></i>

                    </>
                    :
                    <i onClick={handleLike} className="fa-regular fa-heart m-2" style={{ cursor: "pointer" }}> <span className='text-black fw-bolder '>{blogDetails.likeCount}</span></i>
                  }


                  {
                    isSaved ?
                      <i onClick={handleUnsaved} className="fa-solid  fa-bookmark m-2" style={{ cursor: "pointer" }}></i>
                      :
                      <i onClick={handleFavorites} className="fa-regular fa-bookmark m-2" style={{ cursor: "pointer" }}></i>
                  }

                </div>

              </div>
              <p style={{ color: "gray", float: "right" }}>Published On :  <span>{displayData?.publishDate}</span></p>
            </>
          }


          {
            isOwner == "true" &&

            <div className='d-flex justify-content-evenly  w-100'>
              <div className="btn"><Edit displayData={displayData} userDetails={userDetails} /></div>
              <button onClick={() => deleteBlog(displayData?._id)} className='btn text-danger'><i className="fa-solid fa-trash"></i></button>

            </div>

          }

        </Card.Body>
      </Card>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.tiltle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className='d-flex justify-content-center align-items-center' >
              <img className='img-fluid shadow' src={`${SERVER_URL}/uploads/${displayData?.blogImg}`} alt="" width={"400px"} />
            </Col>
            <Col lg={7} style={{ textAlign: "justify" }}>
              <p>Auther : <span className='text-warning'>{userDetails.username}</span></p>
              <p>{displayData?.subhead}</p>
              <p>{displayData?.description}</p>
              <h6 className='px-3 border rounded-5 bg-secondary py-1 text-black w-25 '>{displayData?.category}</h6>

            </Col>
          </Row>
        </Modal.Body>

      </Modal>
    </div>
  )
}

export default BlogCard

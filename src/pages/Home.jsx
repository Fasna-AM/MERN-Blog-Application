import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import HomeImg from '../assets/Home.jpg'
import { Link, useNavigate } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { Card, Col, Modal, Row } from 'react-bootstrap'
import { tokenAuthContext } from '../context/AuthContextAPI'
import SERVER_URL from '../services/ServerUrl'
import { homeblogAPI } from '../services/allAPIs'


const Home = () => {
  const { isAutherised, setIsAutherised } = useContext(tokenAuthContext)
  const [show, setShow] = useState(false);
  const [blogDetails, setBlogDetails] = useState([])
  const [modalBlog,setModalBlog] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    fechBlogs()
  }, [])

  const fechBlogs = async () => {
    try {
      const result = await homeblogAPI()
      // console.log(result);

      if (result.status == 200) {
        setBlogDetails(result.data)
      }

    } catch (err) {
      console.log(err);

    }
  }

  const mystyle = {
    backgroundImage: `url(${HomeImg})`,
    minHeight: "650px",
    backgroundSize: "cover",
    // backgroundPosition: "center"



  }
  const handleClose = () => setShow(false);
  const handleShow = (blog) => {
    setShow(true);
    setModalBlog(blog)
  }

  const handleBlog = () => {
    if (sessionStorage.getItem("token")) {

      navigate('/blogs')

    } else {
      alert("Please login to get full access to our blogs ")
    }
  }

  return (
    <>

      <h1 className='w-100 text-center position-absolute ' style={{ fontSize: "120px", fontFamily: "'Courier New', Courier, monospace", marginTop: "-20px" }}>BLOG</h1>
      <div className='d-flex justify-content-center align-items-center row container-fluid' style={mystyle}>
        <div className='col-lg-4 mt-5 '>
          <p className='text-white ' style={{ textAlign: "justify", fontSize: "20px" }}>
            One St0p Destination for all Blogs. Where User can add and manage their blogs. As well as access all blogs available in our website... What are you waiting for!!!
          </p>
          {
            isAutherised ?
              <Link to={'/blogs'} className='btn btn-dark text-white mt-3 py-2 fw-bolder'>EXPLORE  BLOGS</Link>
              :
              <Link to={'/login'} className='btn btn-dark text-white mt-3 py-2 fw-bolder'>STARTS TO EXPLORE</Link>

          }
        </div>
        <div className='col-lg-6'></div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Blogs</h1>
        <marquee >
              <div className="d-flex ">
              {
            blogDetails?.map((blog,index) => (
              <div key={index} className="me-5">
                  <img width={"400rem"} height={"200rem"} style={{ cursor: "pointer" }} onClick={()=>handleShow(blog)} src={`${SERVER_URL}/uploads/${blog?.blogImg}`}  alt="" />

              </div>
              ))

            }
              </div>
           
        </marquee>
        <button onClick={handleBlog} className='btn btn-link mt-5'>Click Here To View More Blogs....</button>
      </div>
      <div className="d-flex justify-content-center align-items-center my-5 flex-column">
        <h1>Our Testimonials</h1>
        <div className="d-flex align-items-center justify-content-evenly mt-3 w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnSA1zygA3rubv-VK0DrVcQ02Po79kJhXo_A&s" alt="" />
                <span>Max Miller</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quidem in perferendis architecto, ratione eius voluptates accusamus ex consequuntur culpa!</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center   flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&s" alt="" />
                <span>Alexa</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quidem in perferendis architecto, ratione eius voluptates accusamus ex consequuntur culpa!</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title className='d-flex justify-content-center align-items-center   flex-column'>
                <img width={'60px'} height={'60px'} className='rounded-circle img-fluid ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMoIngXmT6e3Z3_beN-iew3UuOB9S8r1-frg&s" alt="" />
                <span>Basil</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>
                  <i className="fa-solid fa-star text-warning"></i>

                </div>
                <p style={{ textAlign: "justify" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus itaque quidem in perferendis architecto, ratione eius voluptates accusamus ex consequuntur culpa!</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <Footer />
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalBlog?.tiltle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className='d-flex justify-content-center align-items-center' >
              <img className='img-fluid shadow' src={`${SERVER_URL}/uploads/${modalBlog?.blogImg}`} alt="" width={"400px"} />
            </Col>
            <Col lg={7} style={{ textAlign: "justify" }}>
              <p>{modalBlog?.subhead}</p>
              <p>{modalBlog?.description}</p>
              <h6 className='px-3 border rounded-5 bg-secondary py-1 text-black w-25 '>{modalBlog ?.category}</h6>

            </Col>
          </Row>
        </Modal.Body>

      </Modal>
    </>
  )
}

export default Home
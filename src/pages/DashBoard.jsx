import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from '../components/BlogCard'
import userImg from '../assets/userImg.jpg'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const DashBoard = ({ insideBlogs }) => {
  return (
    <>
      <Header />
      <div className=' container mt-3   '>
        <Row >
          <Col sm={12} md={7} lg={9}>
            <div className='d-flex  justify-content-between'>
            <h6>Blog Published</h6>
            <Link to={'/settings'} className="btn">Settings</Link>
            </div>

            <hr />
            <div className=' d-flex flex-wrap'>
            <BlogCard insideBlogs insidedashboard={true}/>
           
            </div>

          </Col>
          <Col className=" d-flex flex-column justify-content-evenly" style={{ height: "550px" }}>
            <img src={userImg} alt="" width={"150rem"} height={"150rem"} className='rounded-circle'/>
            <h6>Username</h6>
            <p>3 Blogs</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis dolorem distinctio amet optio illum tempore</p>
            <div className="d-flex gap-4">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-twitter"></i>
            </div>
            <p>Joined on date</p>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default DashBoard
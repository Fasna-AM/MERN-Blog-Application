import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import HomeImg from '../assets/Home.jpg'
import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import { Card } from 'react-bootstrap'



const Home = () => {


  const mystyle = {
    backgroundImage: `url(${HomeImg})`,
    minHeight: "650px",
    backgroundSize: "cover",
    // backgroundPosition: "center"



  }

  return (
    <>

      <h1 className='w-100 text-center position-absolute ' style={{ fontSize: "120px", fontFamily: "'Courier New', Courier, monospace", marginTop: "-20px" }}>BLOG</h1>
      <div className='d-flex justify-content-center align-items-center row container-fluid' style={mystyle}>
        <div className='col-lg-4 mt-5 '>
        <p className='text-white '  style={{ textAlign: "justify",fontSize:"20px" }}>
          One St0p Destination for all Blogs. Where User can add and manage their blogs. As well as access all blogs available in our website... What are you waiting for!!!
        </p>
        <Link to={'/login'} className='btn btn-dark text-white mt-3 py-2 fw-bolder'>STARTS TO EXPLORE</Link>
        </div>
        <div className='col-lg-6'></div>
        </div>
        <div className="mt-5 text-center">
        <h1 className="mb-5">Explore Our Blogs</h1>
        <marquee >
          <div className="d-flex me-2">
           
                <BlogCard />
             
          </div>
        </marquee>
        <button className='btn btn-link mt-5'>Click Here To View More Blogs....</button>
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
    </>
  )
}

export default Home
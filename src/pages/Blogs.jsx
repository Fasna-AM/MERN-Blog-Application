import React from 'react'
import BlogCard from '../components/BlogCard'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Footer from '../components/Footer'


const Blogs = ({insideBlogs}) => {
  return (
 <>
    <Header/>
    <div className="container-fluid" >
    <div className="d-flex justify-content-between ">
      <h1>All Blogs</h1>
      <input  type="text" placeholder='Search Blogs by their category' className='form-control w-25' />

    </div>
    <Row className='mt-3 '>
     
        <Col className='mb-3  w-100' sm={12} md={6} lg={4} >
        <div className=' d-flex flex-wrap justify-content-center'>

        <BlogCard insideBlogs={true}/>
        <BlogCard insideBlogs={true}/>
        <BlogCard insideBlogs={true}/>
        <BlogCard insideBlogs={true}/>
        <BlogCard insideBlogs={true}/>
        </div>


        </Col>
     
      {/* <div className='text-danger'>
        Blog Not Found!!!
      </div> */}
     
    </Row>
    
  </div>
  <Footer/>
 </>
  )
}

export default Blogs
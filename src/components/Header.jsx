import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import userImg from '../assets/userImg.jpg'
import addBlogImg from '../assets/addBlog .png'

const Header = () => {
  return (
    <div>
       <Navbar className="p-3">
        <Container>
          
            <Link to={'/'} className='text-black fw-bolder 'style={{textDecoration:"none",fontSize:"25px"}}>
              Blog
            </Link>

            <div className="ms-auto">
              <Link to={'/addBlog'} className='btn btn-link fw-bolder text-black'style={{textDecoration:"none"}}><img src={addBlogImg} alt="" width={"30px"}/>  Write</Link>
              <Link to={'/dashboard'}><img src={userImg} alt="" width={"80px"} height={"80px"} className='rounded-circle'/></Link>
            <button className='btn btn-link fw-bolder'>Logout <i className="fa-solid fa-right-from-bracket ms-1"></i></button>
          </div>
            
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
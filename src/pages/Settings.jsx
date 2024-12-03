import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import addBlogImg from '../assets/addBlog .png'
import blogsImg from '../assets/blog (1).png'
import PasswordChange from '../components/PasswordChange'
import EditProfile from '../components/EditProfile'


const Settings = () => {

    const [ischangepassword,setIsschangepassword] = useState(false)

    return (
        <>
            <Header />
            <div className='container d-flex flex-column justify-content-center' >
                <Row>
                    <Col className='d-flex flex-column justify-content-evenly' style={{ minHeight: "75vh" }}>
                        <Link to={'/dashboard'} style={{ textDecoration: "none" }} className='text-secondary' >Dashboard</Link>
                        <Link to={'/blogs'} style={{ textDecoration: "none" }} className='text-secondary' ><img src={blogsImg} alt="" width={"25px"} />  Blogs</Link>
                        <Link to={'/addBlog'} style={{ textDecoration: "none" }} className='text-secondary'><img src={addBlogImg} alt="" width={"25px"} /> Write</Link>
                        <Link to={'/favorites'} style={{ textDecoration: "none" }} className='ms-1 text-secondary'><img className='fa-solid  fa-bookmark' src="" alt="" /> Saved Blogs</Link>
                        <h6>Settings</h6>
                        <Link onClick={()=>setIsschangepassword(false)}  to={'/settings'} style={{ textDecoration: "none" }} className='text-secondary' ><i class="fa-solid fa-user"></i> Edit Profile </Link>
                        <Link onClick={()=>setIsschangepassword(true)}  style={{ textDecoration: "none" }} className='text-secondary' ><i class="fa-solid fa-lock"></i> Change Password</Link>


                    </Col>

                    {
                        ischangepassword ?
                            <Col className=' mt-5  pt-5' lg={10}>
                               <PasswordChange/>

                            </Col>
                            :
                            <Col lg={10}>
                                <EditProfile/>
                            </Col>
                    }

                </Row>
            </div>
            <Footer />
        </>
    )
}

export default Settings
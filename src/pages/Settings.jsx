import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import addBlogImg from '../assets/addBlog .png'
import blogsImg from '../assets/blog (1).png'
import userImg from '../assets/userImg.jpg'


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
                        <h6>Settings</h6>
                        <Link onClick={()=>setIsschangepassword(false)}  to={'/settings'} style={{ textDecoration: "none" }} className='text-secondary' ><i class="fa-solid fa-user"></i> Edit Profile </Link>
                        <Link onClick={()=>setIsschangepassword(true)}  style={{ textDecoration: "none" }} className='text-secondary' ><i class="fa-solid fa-lock"></i> Change Password</Link>

                    </Col>

                    {
                        ischangepassword ?
                            <Col className='d-flex flex-column align-items-center mt-5 pt-5' lg={10}>
                                <h6>
                                    Change Password
                                </h6>
                                <div className=" mb-5 w-50 ">
                                            <input type="text" placeholder='Current Password' className='form-control' />
                                        </div>
                                        <div className=" mb-5 w-50 ">
                                            <input type="text" placeholder='New Passwod' className='form-control' />
                                        </div>
                                        <div>
                                            <button className="btn btn-dark">Change Password</button>
                                        </div>

                            </Col>
                            :
                            <Col lg={10}>
                                <h6 className='mt-3'>Edit Profile</h6>
                                <Row>
                                    <Col lg={3} >
                                        <label >
                                            <input type="file" style={{ display: "none" }} />
                                            <img src={userImg} alt="" width={"300px"} height={"300px"} className='rounded-circle' />
                                        </label>
                                    </Col>
                                    {/* <Col></Col> */}
                                    <Col lg={8}>
                                        <div className="mt-2 mb-5 w-100 d-flex">
                                            <input type="text" placeholder='UserName' className='form-control me-2 ' />
                                            <input type="text" placeholder='Email' className='form-control' />
                                        </div>
                                        <div className="mt-2 mb-5 w-100 d-flex">
                                            <textarea type="text" placeholder='Bio' className='form-control me-2 ' />
                                        </div>
                                        <h6>Add Your Social Handles Below</h6>
                                        <div className="mt-2 mb-5 w-100 d-flex">
                                            <input type="text" placeholder='YouTube' className='form-control me-2 ' />
                                            <input type="text" placeholder='Instagram' className='form-control' />
                                        </div><div className="mt-2 mb-5 w-100 d-flex">
                                            <input type="text" placeholder='Facebook' className='form-control me-2 ' />
                                            <input type="text" placeholder='Twitter' className='form-control' />
                                        </div><div className="mt-2 mb-5 w-100 d-flex">
                                            <input type="text" placeholder='Github' className='form-control me-2 ' />
                                            <input type="text" placeholder='Linkedin' className='form-control' />
                                        </div>
                                        <div>
                                            <button className="btn btn-dark">Update Profile</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                    }

                </Row>
            </div>
            <Footer />
        </>
    )
}

export default Settings
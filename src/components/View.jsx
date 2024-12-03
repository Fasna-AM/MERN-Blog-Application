import React from 'react'
import { Col, Row } from 'react-bootstrap'
import BlogCard from './BlogCard'

const View = ({ displaydata,isOwner }) => {

    // console.log(displaydata);

    return (
        <div>
            <Row className=''>
                {
                    displaydata?.length > 0 ?
                        displaydata?.map(blog=>(
                            <Col key={blog._id} className='mb-3' sm={12} md={6} lg={5} >
                            <BlogCard insideBlogs={true} displayData={blog} isOwner={isOwner}/>
                        </Col>
                        ))
                    :
                    <div className='d-flex justify-content-center align-items-center 'style={{ height: "500px" }}>
                        <h3 className='fw-bolder'> No Blogs are published yet!!!</h3>
                    </div>
                }




            </Row>
        </div>
    )
}

export default View
import React, { useState } from 'react'
import { Button, Card, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Edit from './Edit';



const BlogCard = ({ insideBlogs,insidedashboard }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='m-5'>
      <Card className='btn shadow' style={{ width: '20rem' }}  >
        <Card.Img onClick={handleShow} variant="top" src="https://mapmygenome.in/cdn/shop/articles/How_to_Stay_Healthy_While_Traveling_-_Tips_and_Insights_for_a_Safe_Journey.webp?v=1718688910" />
        <Card.Body >
          <Card.Title className='text-center'> Title</Card.Title>
          <Link to={'/dashboard'} className='text-warning d-flex justify-content-center'style={{textDecoration:"none"}}>
            Bloger name
          </Link>
          {
            insideBlogs &&

            <>
              <Card.Text style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis corrupti adipisci fuga quam nam magni nobis,
              </Card.Text>
             <div className='d-flex justify-content-between mb-2'>
             <h6 className='px-3 border rounded-5 bg-secondary py-1 text-black '>category</h6>
             <p><i className="fa-regular fa-heart"></i> count</p>
             </div>
             <p style={{color:"gray",float:"right"}}>Published On <span>date</span></p>
             <br/>
            </>
          }
          {
            insidedashboard &&
            <div className='d-flex justify-content-evenly  w-100'>
                  <div className="btn"><Edit/></div>
                  <button  className='btn text-danger'><i className="fa-solid fa-trash"></i></button>

            </div>
          }

        </Card.Body>
      </Card>
      <Modal size='lg' centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col className='d-flex justify-content-center align-items-center' >
            <img className='img-fluid shadow' src="https://mapmygenome.in/cdn/shop/articles/How_to_Stay_Healthy_While_Traveling_-_Tips_and_Insights_for_a_Safe_Journey.webp?v=1718688910" alt="" width={"400px"}/>
            </Col>
            <Col lg={7} style={{textAlign:"justify"}}>
            <p>Auther : <span className='text-warning'>username</span></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis perspiciatis error quibusdam accusantium nemo nam</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum reprehenderit aliquam possimus molestiae corporis sunt alias aperiam ipsam totam placeat odio architecto, incidunt odit eaque quia maiores. Eveniet, est!
            Minus iusto deleniti illum culpa cupiditate consectetur, iure expedita odit consequatur natus fuga ab tempore voluptates esse labore, obcaecati aliquid, ratione impedit aperiam quos inventore mollitia exercitationem commodi eveniet? Saepe!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti et vero repudiandae officia, porro illo eligendi illum ullam </p>
            <h6 className='px-3 border rounded-5 bg-secondary py-1 text-black w-25 '>category</h6>

            </Col>
          </Row>
        </Modal.Body>
       
      </Modal>
    </div>
  )
}

export default BlogCard

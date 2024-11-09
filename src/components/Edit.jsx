import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/uploadImg.jpg'
import { FloatingLabel, Form } from 'react-bootstrap'

const Edit = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button onClick={handleShow} className='btn text-primary'><i className="fa-solid fa-pen-to-square"></i></button>
      <Modal size='lg'
        centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Blog Details !!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row  align-items-center p-3" >
          <div className="col-lg-4 ">
            <label>
              <input type="file" style={{ display: "none" }} />
              <img src={uploadImg} alt="" className='img-fluid' />
            </label>
          </div>
          <div className="col-lg-8 mt-5 ">
          <p>Author : <span className='text-warning'>username</span></p>

              <FloatingLabel
                controlId="floatingInputTitle"
                label="Title"
                className="mb-3 w-100 "
              >
                <Form.Control type="text" placeholder="Title" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputSubhead"
                label="Subhead"
                className="mb-3 w-100 "
              >
                <Form.Control type="text" placeholder="Subhead" />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputContent"
                label="Description"
                className="mb-3 w-100 "
              >
                <Form.Control as="textarea" style={{ height: '150px' }} placeholder="Description" />
              </FloatingLabel>
              <Form.Select size="lg" aria-label="Default select example">
                <option>Category</option>
                <option value="Education">Education</option>
                <option value="Travel2">Travel</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Other">Other</option>

              </Form.Select>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
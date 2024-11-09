import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import uploadImg from '../assets/uploadImg.jpg'
import { FloatingLabel, Form } from 'react-bootstrap'

const Add = () => {
  return (
    <>
      <Header />
      <div className='container mt-3 '>
        <h3 className='text-center'>Publish Your New Blog Here!!!</h3>
        <div className="row  align-items-center mb-5" style={{minHeight:"75vh"}}>
          <div className="col-lg-4 ">
            <label>
              <input type="file" style={{ display: "none" }} />
              <img src={uploadImg} alt="" className='img-fluid' />
            </label>
          </div>
          <div className="col-lg-8 mt-5 ">

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
              <button className='btn btn-dark mt-5'>Publish</button>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Add
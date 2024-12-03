import React, { useContext, useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import uploadImg from '../assets/uploadImg.jpg'
import { FloatingLabel, Form } from 'react-bootstrap'
import { updateBlogAPI } from '../services/allAPIs';
import SERVER_URL from '../services/ServerUrl';
import { editBlogResponseContext } from '../context/DashboardContextAPI';
import Swal from 'sweetalert2';

const Edit = ({displayData,userDetails}) => {

  const {editBlogResponse,setEditBlogResponse} = useContext(editBlogResponseContext)
  const [preview,setPreview] = useState("")
  const [imageFileStatus,setImageFileStatus] = useState(false)
  const [blogdetails,setBlogDetails] = useState({
    id:displayData._id,tiltle:displayData.tiltle,subhead:displayData.subhead,description:displayData.description,category:displayData.category,likeCount:displayData.likeCount,publishDate:displayData.publishDate,blogImg:""
  })
  const [authorDetails,setAuthorDetails]= useState({})

  useEffect(()=>{
    setAuthorDetails(userDetails)
    if(blogdetails.blogImg.type=="image/png" || blogdetails.blogImg.type=="image/jpg" || blogdetails.blogImg.type=="image/jpeg"){
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(blogdetails.blogImg))
    }else{
      setImageFileStatus(false)
      setPreview("")
      setBlogDetails({...blogdetails,blogImg:""})
    }
  },[blogdetails.blogImg])

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setBlogDetails({
      id:displayData._id,tiltle:displayData.tiltle,subhead:displayData.subhead,description:displayData.description,category:displayData.category,likeCount:displayData.likeCount,publishDate:displayData.publishDate,blogImg:""
    })

  }
  const handleShow = () => {
    setShow(true);
    setBlogDetails({
       id:displayData._id,tiltle:displayData.tiltle,subhead:displayData.subhead,description:displayData.description,category:displayData.category,likeCount:displayData.likeCount,publishDate:displayData.publishDate,blogImg:""
    })

  }


  const handleUpdateBlog=async()=>{
    const {id,tiltle,subhead,description,category,likeCount,publishDate,blogImg}= blogdetails
    if(tiltle && subhead && description && category){
      const reqbody = new FormData()
      reqbody.append("tiltle",tiltle)
      reqbody.append("subhead",subhead)
      reqbody.append("description",description)
      reqbody.append("category",category)
      reqbody.append("likeCount",likeCount)
      reqbody.append("publishDate",publishDate)
      preview?reqbody.append("blogImg",blogImg) : reqbody.append("blogImg",displayData.blogImg)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try{
          const result = await updateBlogAPI(id,reqbody,reqHeader)
          if(result.status==200){
            // alert("Blog update successfully!!!")
            Swal.fire('Success!','Blog Updated Successfully!!!','success')

            handleClose()
            setEditBlogResponse(result)
          }


        }catch(err){
          console.log(err);
          
        }
      }
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  return (
    <div>
      <button onClick={handleShow} className='btn text-primary'><i className="fa-solid fa-pen-to-square"></i></button>
      <Modal size='xl'
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
              <input onChange={e=>setBlogDetails({...blogdetails,blogImg:e.target.files[0]})} type="file" style={{ display: "none" }} />
              <img src={preview?preview:`${SERVER_URL}/uploads/${displayData.blogImg}`} alt="" className='img-fluid' />
            </label>
            { !imageFileStatus && <div className="text-warning fw-bolder my-2">* Upload Only the following file types (jpeg,jpg,png) here !!!</div>}
          </div>
          <div className="col-lg-8 mt-5 ">
          <p>Author : <span className='text-warning'>{authorDetails.username}</span></p>

              <FloatingLabel
                controlId="floatingInputTitle"
                label="Title"
                className="mb-3 w-100 "
              >
                <Form.Control type="text" placeholder="Title" value={blogdetails.tiltle} onChange={e=>setBlogDetails({...blogdetails,tiltle:e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputSubhead"
                label="Subhead"
                className="mb-3 w-100 "
              >
                <Form.Control type="text" placeholder="Subhead" value={blogdetails.subhead} onChange={e=>setBlogDetails({...blogdetails,subhead:e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputContent"
                label="Description"
                className="mb-3 w-100 "
              >
                <Form.Control as="textarea" style={{ height: '150px' }} placeholder="Description" value={blogdetails.description} onChange={e=>setBlogDetails({...blogdetails,description:e.target.value})}/>
              </FloatingLabel>
              <Form.Select size="lg" aria-label="Default select example" value={blogdetails.category} onChange={e=>setBlogDetails({...blogdetails,category:e.target.value})}>
                <option style={{display:"none"}}>Category</option>
                <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Other">Other</option>

              </Form.Select>
          </div>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateBlog} variant="dark">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import uploadImg from '../assets/uploadImg.jpg'
import { FloatingLabel, Form, Modal } from 'react-bootstrap'
import { addBlogAPI } from '../services/allAPIs'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const Add = () => {

  const [preview,setPreview] = useState("")
  const [imageFileStatus,setImageFileStatus] = useState(false)
  const navigate = useNavigate()

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [blogDetails,setBlogDetails] = useState({
    tiltle:"",subhead:"",description:"",category:"",publishDate:"",blogImg:""
  })
  useEffect(()=>{
    if(blogDetails.blogImg.type=="image/png" || blogDetails.blogImg.type=="image/jpg" || blogDetails.blogImg.type=="image/jpeg"){
      //validimage
      setImageFileStatus(true)
      setPreview(URL.createObjectURL(blogDetails.blogImg))
      setBlogDetails({...blogDetails,publishDate:new Date().toLocaleString().split(" ")[0]})
    }else{
      //invalid image
      setImageFileStatus(false)
      setPreview("")
      setBlogDetails({...blogDetails,blogImg:""})
    }
    
  },[blogDetails.blogImg])

  const handlePublish = async()=>{
    

    const {tiltle,subhead,description,category,publishDate,blogImg} = blogDetails
    if(tiltle&&subhead&&description&&category&&blogImg){
      const reqbody = new FormData()
      reqbody.append("tiltle",tiltle)
      reqbody.append("subhead",subhead)
      reqbody.append("description",description)
      reqbody.append("category",category)
      reqbody.append("publishDate",publishDate)
      reqbody.append("blogImg",blogImg)
      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        try{
          const result = await addBlogAPI(reqbody,reqHeader)
          if(result.status==200){
            // console.log(result);
            // alert("Blog Published successfully!!!")
            Swal.fire('Success!','Blog Published Successfully!!!','success')
            setPreview("")
            setImageFileStatus(false)
            setBlogDetails({
              tiltle:"",subhead:"",description:"",category:"",publishDate:"",blogImg:""
            })
            navigate('/blogs')
          }else{
            alert(result.response.data)
          }
        }catch(err){
          console.log(err);
          
        }
      }

    }else{
      alert("Please Fill the form Completely!!!!")
    }
  }
// console.log(blogDetails);

  
  return (
    <>
      <Header />
      <div className='container mt-4 '>
        <h3 className='text-center'>Publish Your New Blog Here!!!</h3>
        <div className="row  align-items-center mb-5" style={{minHeight:"75vh"}}>
          <div className="col-lg-4 ">
            <label>
            <input onChange={e=>setBlogDetails({...blogDetails,blogImg:e.target.files[0]})} type="file" style={{ display: "none" }} />
              <img src={preview?preview:uploadImg} alt="" className='img-fluid' />
            </label>
            {
              !imageFileStatus &&
              <div className='text-warning fw-bolder my-2'>
                * Upload Only the following file types (jpeg,jpg,png) here !!!
              </div>
            }
          </div>
          <div className="col-lg-8 mt-5 ">

              <FloatingLabel
                controlId="floatingInputTitle"
                label="Title"
                className="mb-3 w-100 "
              >
                <Form.Control type="text" placeholder="Title" value={blogDetails.tiltle} onChange={e=>setBlogDetails({...blogDetails,tiltle:e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputSubhead"
                label="Subhead"
                className="mb-3 w-100 "
              >
                <Form.Control type="text" placeholder="Subhead" value={blogDetails.subhead} onChange={e=>setBlogDetails({...blogDetails,subhead:e.target.value})}/>
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInputContent"
                label="Description"
                className="mb-3 w-100 "
              >
                <Form.Control as="textarea" style={{ height: '150px' }} placeholder="Description" value={blogDetails.description} onChange={e=>setBlogDetails({...blogDetails,description:e.target.value})}/>
              </FloatingLabel>
              <Form.Select size="lg" aria-label="Default select example" value={blogDetails.category} onChange={e=>setBlogDetails({...blogDetails,category:e.target.value})}>
                <option style={{display:"none"}}>Category</option>
                <option value="Education">Education</option>
                <option value="Travel">Travel</option>
                <option value="Agriculture">Agriculture</option>
                <option value="Other">Other</option>

              </Form.Select>
              <button onClick={handlePublish} className='btn btn-dark mt-5'>Publish</button>
          </div>
        </div>


      </div>
      <Footer />
    </>
  )
}

export default Add
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import userImg from '../assets/userImg.jpg'
import SERVER_URL from '../services/ServerUrl'
import { updateProfileAPI } from '../services/allAPIs'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const EditProfile = () => {

    const [authorDetails,setAuthorDetails]=useState({
        username:"",email:"",password:"",profileImg:"",Bio:"",youTube:"",instagram:"",facebook:"",twitter:"",github:"",joinDate:"",notifications:[],favorites:[]
    })
    const [preview,setPreview] = useState("")
  const [existingProfileImg,setExistingProfileImg] = useState("")
  const navigate = useNavigate()

    useEffect(()=>{
        if(sessionStorage.getItem("author")){
            const author = JSON.parse(sessionStorage.getItem("author"))
            setAuthorDetails({
                ...authorDetails,username:author.username,email:author.email,password:author.password,Bio:author.Bio,youTube:author.youTube,instagram:author.instagram,facebook:author.facebook,twitter:author.twitter,github:author.github,joinDate:author.joinDate,notifications:author.notifications,favorites:author.favorites
            })
            setExistingProfileImg(author.profileImg)
        }
    },[])

    useEffect(()=>{
        if(authorDetails.profileImg){
            setPreview(URL.createObjectURL(authorDetails.profileImg))
        }else{
            setPreview("")
        }
    },[authorDetails.profileImg])

    const handleUpdateProfile = async()=>{
        const {username,email,password,profileImg,Bio,youTube,instagram,facebook,twitter,github,joinDate,notifications,favorites} =authorDetails
        const reqBody = new FormData()
        reqBody.append("username",username)
        reqBody.append("email",email)
        reqBody.append("password",password)
        preview?reqBody.append("profileImg",profileImg):reqBody.append("profileImg",existingProfileImg)
        reqBody.append("Bio",Bio)
        reqBody.append("youTube",youTube)
        reqBody.append("instagram",instagram)
        reqBody.append("facebook",facebook)
        reqBody.append("twitter",twitter)
        reqBody.append("github",github)
        reqBody.append("joinDate",joinDate)
        reqBody.append("notifications",notifications)
        reqBody.append("favorites",favorites)
        
        const token = sessionStorage.getItem("token")
        if(token){
            const reqHeader = {
                "Content-Type":"multipart/form-data",
          "Authorization": `Bearer ${token}`
            }
            try{
                const result = await updateProfileAPI(reqBody,reqHeader)
                if(result.status==200){
                    // alert("User Profile update successfully!!!")
                    Swal.fire('Success!','User Profile Updated Successfully!!!','success')
                    sessionStorage.setItem("author",JSON.stringify(result.data))
                    navigate('/dashboard')
                }

            }catch(err){
                console.log(err);
                
            }
        }

    }
    // console.log(authorDetails);
    
    return (
        <div>
            <h6 className='mt-4'>Edit Profile</h6>
            <Row>
                <Col lg={3} >
                    <label className=''>
                        <input onChange={e=>setAuthorDetails({...authorDetails,profileImg:e.target.files[0]})} type="file" style={{ display: "none" }} />

                        {
                            existingProfileImg==""?
                            <img src={preview?preview:userImg} alt="" width={"200px"} height={"200px"} className='rounded-circle mt-5' />
                            :
                            <img src={preview?preview:`${SERVER_URL}/uploads/${existingProfileImg}`} alt="" width={"200px"} height={"200px"} className='rounded-circle' />
                        }
                    </label>
                </Col>
                {/* <Col></Col> */}
                <Col lg={8}>
                    <div className="mt-2 mb-5 w-100 d-flex">
                        <input type="text" placeholder='UserName' className='form-control me-2 ' value={authorDetails.username} onChange={e=>setAuthorDetails({...authorDetails,username:e.target.value})}/>
                        <input type="text" placeholder='Email' className='form-control' value={authorDetails.email} onChange={e=>setAuthorDetails({...authorDetails,email:e.target.value})}/>
                    </div>
                    <div className="mt-2 mb-5 w-100 d-flex">
                        <textarea type="text" placeholder='Bio' className='form-control me-2 ' value={authorDetails.Bio} onChange={e=>setAuthorDetails({...authorDetails,Bio:e.target.value})}/>
                    </div>
                    <h6>Add Your Social Handles Below</h6>
                    <div className="mt-2 mb-5 w-100 d-flex">
                        <input type="text" placeholder='YouTube' className='form-control me-2 ' value={authorDetails.youTube} onChange={e=>setAuthorDetails({...authorDetails,youTube:e.target.value})}/>
                        <input type="text" placeholder='Instagram' className='form-control' value={authorDetails.instagram} onChange={e=>setAuthorDetails({...authorDetails,instagram:e.target.value})}/>
                    </div><div className="mt-2 mb-5 w-100 d-flex">
                        <input type="text" placeholder='Facebook' className='form-control me-2 ' value={authorDetails.facebook} onChange={e=>setAuthorDetails({...authorDetails,facebook:e.target.value})}/>
                        <input type="text" placeholder='Twitter' className='form-control'  value={authorDetails.twitter} onChange={e=>setAuthorDetails({...authorDetails,twitter:e.target.value})}/>
                    </div><div className="mt-2 mb-5 w-100 d-flex">
                        <input type="text" placeholder='Github' className='form-control me-2 ' value={authorDetails.github} onChange={e=>setAuthorDetails({...authorDetails,github:e.target.value})}/>
                        <input type="text" placeholder='linkedin' className='form-control me-2 ' value={authorDetails.linkedin} onChange={e=>setAuthorDetails({...authorDetails,linkedin:e.target.value})}/>


                    </div>
                    <div>
                        <button onClick={handleUpdateProfile} className="btn btn-dark">Update Profile</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default EditProfile
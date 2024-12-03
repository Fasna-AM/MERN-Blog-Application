import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import BlogCard from '../components/BlogCard'
import { removeFavoritesResponseContext } from '../context/DashboardContextAPI'

const Favorites = () => {

    const [favorites,setFavorites] = useState([])
    const {removefavoritesResponce,setRemoveFavoritesResponse} =useContext(removeFavoritesResponseContext)


    useEffect(()=>{
        fechAllfavorites()

    },[removefavoritesResponce])

    const fechAllfavorites = ()=>{

        const authorDetails = JSON.parse(sessionStorage.getItem("author"))
        // console.log(authorDetails);
        setFavorites(authorDetails.favorites)
      }

    //   console.log(favorites);
      


  return (
    <div >
        <Header/>
        <div className="container mt-3" style={{minHeight:"70vh"}}>
        <div className="d-flex justify-content-between ">
          <h3 className='text-center w-100'>Your Saved Blogs</h3>
        </div>
        <Row className='mt-3 '>
          {
            favorites?.length > 0 ?
              favorites?.map(blog=>(
                <Col key={blog?._id} className='mb-3 ' sm={12} md={6} lg={3} >
                <BlogCard insideBlogs={true} displayData={blog} favorites={favorites}/>
              </Col>
              ))
          
          :
          
            <div className='text-danger'>
              Blog Not Found!!!
            </div>
          }

        </Row>

      </div>
        <Footer/>
    </div>
  )
}

export default Favorites
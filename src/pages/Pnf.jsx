import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Pnf = ({ insidePnf }) => {
    return (

        <>
            <Header insidePnf={true} />
            <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: "70vh" }}>
                <h3 className='mb-2 fw-bolder'>Page Not Found</h3>
                <img src="https://media4.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif?cid=6c09b9524eolac3bbovuwpzm8p5hmbexjuamh9gfrbvc9xfx&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="" />
                <Link to={'/'} className='btn btn-success mt-4'>Go Back Home</Link>
            </div>
            <Footer />
        </>
    )
}

export default Pnf
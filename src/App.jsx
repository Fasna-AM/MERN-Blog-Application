
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import Blogs from './pages/Blogs'
import Add from './pages/Add'
import Settings from './pages/Settings'
import { useContext,useEffect, useState } from 'react'
import { tokenAuthContext } from './context/AuthContextAPI'
import Pnf from './pages/Pnf'
import Favorites from './pages/Favorites'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'

function App() {


  const {isAutherised,setIsAutherised} = useContext(tokenAuthContext)
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAutherised(true)
    } else {
      setIsAutherised(false)
    }
  }, [isAutherised])

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgetPassword />} />
        <Route path='/reset-password/:token' element={<ResetPassword />} />


        {
          isAutherised &&
          <>
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/addBlog' element={<Add />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/favorites' element={<Favorites />} />

          </>
        }
            <Route path='/*' element={<Pnf />} />


      </Routes>

    </>
  )
}

export default App

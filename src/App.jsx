
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard'
import Blogs from './pages/Blogs'
import Add from './pages/Add'
import Settings from './pages/Settings'

function App() {
 

  return (
    <>
     
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/addBlog' element={<Add/>}/>
        <Route path='/settings' element={<Settings/>}/>


      </Routes>
      
    </>
  )
}

export default App

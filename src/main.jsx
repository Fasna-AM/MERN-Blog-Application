import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import AuthContextAPI from './context/AuthContextAPI.jsx'
import DashboardContextAPI from './context/DashboardContextAPI.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AuthContextAPI>
        <DashboardContextAPI>
        <App />

        </DashboardContextAPI>
      </AuthContextAPI>
    </BrowserRouter>
  </StrictMode>,
)

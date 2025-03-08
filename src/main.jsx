import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router.jsx'
import { ToastContainer } from 'react-toastify';
import AuthProvider from './Provider/AuthProvider.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={Router}></RouterProvider>
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,

)
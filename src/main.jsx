import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router'
import router from './routes/router.jsx'
import "./index.css";
import AuthProvider from './provider/AuthProvider.jsx';
import { Toaster } from 'react-hot-toast';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
      <RouterProvider router={router}>

      </RouterProvider>
  </AuthProvider>
    <ToastContainer />
    <Toaster />
  </StrictMode>,
)

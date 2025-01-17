import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'
// import "react-toastify/ReactToastify.min.css";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from '@material-tailwind/react'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <QueryClientProvider client={queryClient}>
   <HelmetProvider>
   <ThemeProvider>
   <div className='w-full mx-auto'>
   <RouterProvider router={router}></RouterProvider>
   </div>
   </ThemeProvider>
   <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
   </HelmetProvider>
    </QueryClientProvider>
   </AuthProvider>
  </StrictMode>,
)

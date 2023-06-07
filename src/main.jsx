import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProvider from './Provider/AuthProvider'
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ToastContainer />
                <RouterProvider router={routes}/>
            </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)

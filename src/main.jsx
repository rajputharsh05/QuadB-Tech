import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
   createBrowserRouter,
   RouterProvider
} from "react-router-dom"

import Navbar from './components/Navbar/Navbar.jsx'
import MoviePage from './components/MoviePage/MoviePage.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element : <App></App>
  },
  {
    path : "/:id",
    element : <MoviePage></MoviePage>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

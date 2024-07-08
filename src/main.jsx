import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Meme from './components/Meme.jsx'
import MemeAbout from './components/MemeAbout.jsx'
import MemeBlog from './components/MemeBlog.jsx'
import MemeProducts from './components/MemeProducts.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "MemeAbout/",
    element: <MemeAbout />
  },
  {
    path: "MemeBlog/",
    element: <MemeBlog />
  },
  {
    path: "MemeProducts/",
    element: <MemeProducts />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Font from 'react-font'
import App from './App.jsx'
import{
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import PawPrints from './home/components/pawprints/PawPrints.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "PawPrints/",
    element: <PawPrints />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)

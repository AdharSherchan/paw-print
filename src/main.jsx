import React from 'react'
import ReactDOM from 'react-dom/client'
import Font from 'react-font'
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
import DropDown from './components/DropDown.jsx'
import DropDownContent from './components/DropDownContent.jsx'
import CoffeeCards from './components/CoffeeCards.jsx'
import CoffeeCarousel from './components/CoffeeCarousel.jsx'
import PawPrints from './components/PawPrints.jsx'
import Test from './components/Test.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "DropDown/",
    element: <DropDown />
  },
  {
    path: "Meme/",
    element: <Meme />
  },
  {
    path: "CoffeeCarousel/",
    element: <CoffeeCarousel />
  },
  {
    path: "PawPrints/",
    element: <PawPrints />
  },
  {
    path: "Test/",
    element: <Test />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)

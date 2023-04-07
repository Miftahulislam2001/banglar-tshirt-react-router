import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Main from './Layout/Main';
import OrderReview from './components/Order/OrderReview';
import About from './components/About/About';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/Home',
        element: <Home></Home>,
        loader : ()=> fetch('tShirts.json')
      },
      {
        path: '/review',
        element:<OrderReview></OrderReview>
      },
      {
        path: '/about',
        element: <About></About>
      },
   

    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

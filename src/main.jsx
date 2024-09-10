import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './screens/home.jsx'
import About from './screens/about.jsx'
import Services from './screens/services.jsx'
import Contact from './screens/contact.jsx'

const router= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>,
        children:[
          {
            path:"",
            element:<h1>person 1</h1>
          },
          {
            path:"person2",
            element:<h1>person 2</h1>
          },
          {
            path:"person3",
            element:<h1>person 3</h1>
          },
        ]
      },
      {
        path:'services',
        element:<Services/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"*",
        element:<h1>Noy Found!!!</h1>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>
)

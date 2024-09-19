import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout.jsx";
import Home from "./screens/home.jsx";
import About from "./screens/about.jsx";
import Contact from "./screens/contact.jsx";
import Products from "./screens/products.jsx";
import SingleProduct from "./screens/singleProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
        children:[
          
        ]
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            path: "",
            element: <h1>person 1</h1>,
          },
          {
            path: "person2",
            element: <h1>person 2</h1>,
          },
          {
            path: "person3",
            element: <h1>person 3</h1>,
          },
        ],
      },

      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/singleproduct/:id",
        element: <SingleProduct/>,
      },
      {
        path: "*",
        element: <h1>Not Found!!!</h1>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

import CartPage from "Pages/CartPage";
import GoodPage from "Pages/GoodPage";
import GoodsPage from "Pages/GoodsPage";
import Layout from "Pages/Layout";
import NotFoundPage from "Pages/NotFoundPage";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import '../Common/Styles/Style.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/goods",
        element: <GoodsPage />
      },
      {
        path: "/goods/:id",
        element: <GoodPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ]
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
import React from "react";
import '../Common/Styles/Style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "src/pages1/Layout";
import { GoodsPage } from "src/pages1/GoodsPage";
import { GoodsItemPage } from "src/pages1/GoodPage";
import { CartPage } from "src/pages1/CartPage";
import { NotFoundPage } from "src/pages1/NotFoundPage";

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
        element: <GoodsItemPage />
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
import React from "react";
import '../Common/Styles/Style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "Pages/Layout";
import { GoodsPage } from "Pages/GoodsPage";
import { GoodsItemPage } from "Pages/GoodPage";
import { CartPage } from "Pages/CartPage";
import { NotFoundPage } from "Pages/NotFoundPage";

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

export const App = () => {
  return <RouterProvider router={router} />
}
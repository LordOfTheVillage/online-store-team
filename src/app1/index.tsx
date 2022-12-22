import React from "react";
import '../Common/Styles/Style.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "src/pages/Layout";
import { GoodsPage } from "src/pages/GoodsPage";
import { GoodsItemPage } from "src/pages/GoodPage";
import { CartPage } from "src/pages/CartPage";
import { NotFoundPage } from "src/pages/NotFoundPage";

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
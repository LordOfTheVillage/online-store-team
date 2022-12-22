import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoodsPage } from "../pages/GoodsPage";
import { GoodsItemPage } from "../pages/GoodPage";
import { CartPage } from "../pages/CartPage";
import { Layout } from "../pages/Layout";
import { NotFoundPage } from "../pages/NotFoundPage";

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
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoodsPage } from "src/pages/GoodsPage";
import { GoodsItemPage } from "src/pages/GoodPage";
import { CartPage } from "src/pages/CartPage";
import { Layout } from "src/pages/Layout";
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

export default function App() {
  return <RouterProvider router={router} />
}
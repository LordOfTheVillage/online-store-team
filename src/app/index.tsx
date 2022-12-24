import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pathes } from "../components/utils/pathes";
import { Layout } from "../components/modules/Layout";
import { CartPage } from "../components/pages/CartPage";
import { GoodsPage } from "../components/pages/GoodsPage";
import { NotFoundPage } from "../components/pages/NotFoundPage";
import { ProductPage } from "../components/pages/ProductPage";

const router = createBrowserRouter([
  {
    path: Pathes.main,
    element: <Layout />,
    children: [
      {
        path: Pathes.goods,
        element: <GoodsPage />
      },
      {
        path: Pathes.goodsItem,
        element: <ProductPage />
      },
      {
        path: Pathes.cart,
        element: <CartPage />
      },
      {
        path: Pathes.any,
        element: <NotFoundPage />,
      },
    ]
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
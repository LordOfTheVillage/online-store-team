import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Pathes } from '../components/utils/pathes';
import { Layout } from '../components/modules/Layout';
import { CartPage } from '../components/pages/CartPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { ProductPage } from '../components/pages/ProductPage';
import { CatalogPage } from '../components/pages/CatalogPage';

const router = createBrowserRouter([
  {
    path: Pathes.main,
    element: <Layout />,
    children: [
      {
        path: Pathes.goods,
        element: <CatalogPage />,
      },
      {
        path: Pathes.goodsItem,
        element: <ProductPage />,
      },
      {
        path: Pathes.cart,
        element: <CartPage />,
      },
      {
        path: Pathes.any,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from '../components/utils/pathes';
import { Layout } from '../components/modules/Layout';
import { CartPage } from '../components/pages/CartPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { ProductPage } from '../components/pages/ProductPage';
import { CatalogPage } from '../components/pages/CatalogPage';

const router = createBrowserRouter([
  {
    path: AppRoutes.main,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <CatalogPage />,
      },
      {
        path: AppRoutes.goodsItem,
        element: <ProductPage />,
      },
      {
        path: AppRoutes.cart,
        element: <CartPage />,
      },
      {
        path: AppRoutes.any,
        element: <NotFoundPage />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

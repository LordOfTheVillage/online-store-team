import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { AppRoutes } from '../components/utils/pathes';
import { Layout } from '../components/modules/Layout';
import { CartPage } from '../components/pages/CartPage';
import { NotFoundPage } from '../components/pages/NotFoundPage';
import { ProductPage } from '../components/pages/ProductPage';
import { CatalogPage } from '../components/pages/CatalogPage';
import { ProductsContextProvider } from '../components/context/ProductsContext';

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
        path: AppRoutes.goods,
        element: <Navigate to={AppRoutes.main} replace />,
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
  return (
    <ProductsContextProvider>
      <RouterProvider router={router} />
    </ProductsContextProvider>
  );
}

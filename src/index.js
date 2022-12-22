import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './components/App.tsx';
import CatalogPage from './components/pages/CatalogPage';
import ProductPage from './components/pages/ProductPage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductPage />
  </React.StrictMode>
);

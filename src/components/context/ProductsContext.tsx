import React, { createContext, FC, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { CartProducts, FullProductProps } from 'src/common/types';

interface IProductContext {
  products: CartProducts[];
  addProduct: (product: FullProductProps) => void;
  removeProduct: (product: FullProductProps) => void;
  removeProducts: (product: FullProductProps) => void;
}

const ProductsContext = createContext<IProductContext>({
  products: [] as CartProducts[],
  addProduct: (product: FullProductProps) => {},
  removeProduct: (product: FullProductProps) => {},
  removeProducts: (product: FullProductProps) => {},
});

export const useProductsContext = () => {
  return useContext(ProductsContext);
};

interface ProviderProps {
  children: ReactNode;
}

export const ProductsContextProvider: FC<ProviderProps> = ({ children }) => {
  const storageKey: string = 'products';
  const [products, setProducts] = useState<CartProducts[]>(() => {
    try {
      const list: CartProducts[] = JSON.parse(localStorage.getItem(storageKey) as string);
      return list === null ? [] : list;
    } catch (error) {
      return [];
    }
  });

  const handleAddCartProduct = (product: FullProductProps) => {
    const list = [...products];
    const index = list.findIndex((e) => e.value.id === product.id);
    if (index === -1) list.push({ count: 1, value: product });
    else list[index].count += 1;
    return list;
  };

  const handleRemoveCartProduct = (product: FullProductProps, mode: string) => {
    const list = [...products];
    const index = list.findIndex((e) => e.value.id === product.id);
    if (mode === 'remove') {
      if (index !== -1 && list[index].count > 1) list[index].count -= 1;
      else if (index !== -1) list.splice(index, 1);
    } else list.splice(index, 1);
    return list;
  };

  const handleChangeCartProducts = useCallback(
    (mode: string, product: FullProductProps) => {
      const productsList =
        mode === 'add'
          ? handleAddCartProduct(product)
          : handleRemoveCartProduct(product, mode === 'remove' ? 'remove' : 'removeAll');
      const productsString = JSON.stringify(productsList);
      localStorage.setItem(storageKey, productsString);
      setProducts(productsList);
    },
    [products]
  );

  const handleAddProduct = useCallback(
    (product: FullProductProps) => handleChangeCartProducts('add', product),
    [products]
  );

  const handleRemoveProduct = useCallback(
    (product: FullProductProps) => handleChangeCartProducts('remove', product),
    [products]
  );

  const handleRemoveProducts = useCallback(
    (product: FullProductProps) => handleChangeCartProducts('removeAll', product),
    [products]
  );

  const value = useMemo(
    () => ({
      products,
      addProduct: handleAddProduct,
      removeProduct: handleRemoveProduct,
      removeProducts: handleRemoveProducts,
    }),
    [products, handleAddProduct, handleRemoveProduct]
  );

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};

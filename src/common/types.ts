import { ChangeEvent } from 'react';

export interface PrimaryCheckboxProps {
  id: number;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProductCardProps {
  id: string;
  title: string;
  img: string;
  price: number;
}

export interface FullProductProps {
  id: string;
  title: string;
  annotation: string;
  category: string;
  author: string;
  price: number;
  rating: number;
  stock: number;
  images: string[];
}

type FilterValue = string & string[] & Record<string, number>;

export interface IFilters {
  title?: FilterValue;
  price?: FilterValue;
  author?: FilterValue;
}

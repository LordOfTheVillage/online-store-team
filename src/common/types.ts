import { ChangeEvent } from 'react';

export interface PrimaryCheckboxProps {
  id: number;
  title: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProductCardProps {
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

export interface IFilters {
  author?: (author: string[], sec: string) => boolean;
  category?: (category: string[], sec: string) => boolean;
  // price?: (range: { [x: string]: number | string }, src: number) => boolean;
  // title: (title: string, src: string) => boolean;
}

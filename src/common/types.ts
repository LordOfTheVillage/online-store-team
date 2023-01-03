import { ChangeEvent } from 'react';

export interface PrimaryCheckboxProps {
  id: number;
  title: string;
  checked?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface ProductCardProps {
  id: string;
  title: string;
  img: string;
  price: number;
	productCardClass: string
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

export type FilterValue = string & string[] & Record<string, number>;
export type IFilters = Record<string, FilterValue>;

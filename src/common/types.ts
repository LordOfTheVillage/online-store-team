import { ChangeEvent } from 'react';

export interface PrimaryCheckboxProps {
  id: number;
  title: string;
  checked?: boolean;
  realAmount?: number;
  allAmount?: number;
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

export interface IPropertyList {
  title?: string;
  realAmount?: number;
  allAmount?: number;
}

export type FilterValue = string & string[] & Record<string, number>;
export type IFilters = Record<string, FilterValue>;

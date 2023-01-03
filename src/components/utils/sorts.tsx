import { FullProductProps } from 'src/common/types';

export const SORTS_CONFIG = {
  'Price ASC': (left: FullProductProps, right: FullProductProps) => left.price - right.price,
  'Price DESC': (left: FullProductProps, right: FullProductProps) => right.price - left.price,
  'Rating ASK': (left: FullProductProps, right: FullProductProps) => left.rating - right.rating,
  'Rating DESC': (left: FullProductProps, right: FullProductProps) => right.rating - left.rating,
};

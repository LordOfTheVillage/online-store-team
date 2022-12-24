import React, { useMemo, useState } from 'react';
import { FullProductProps } from 'src/common/types';
import { ALL_PRODUCTS } from '../../common/data';
import { Catalog } from '../modules/Catalog';
import { Filter } from '../modules/Filtr';
import { Header } from '../modules/Header';
import { MultiSelect } from '../modules/MultiSelect';
import { Sort } from '../modules/Sort';
import { DualSlider } from '../simple/DualSlider';
import {
  SELECT_FILTERS_CONFIG,
  generateListByProperty,
  SORTINGS_CONFIG,
  RANGE_FILTERS_CONFIG,
  generateRangeByProperty,
  SEARCH_FILTERS_CONFIG,
} from '../utils/utils';

interface CatalogPageProps {}

interface ISelectFiltersItems {
  author?: string[];
  category?: string[];
}

interface IRangeFiltersItems {
  price?: Record<string, number>;
  rating?: Record<string, number>;
}

interface ISearchFiltersItems {
  title?: string;
}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [sorting, setSorting] = useState<string>('');
  const [selectFilters, setSelectFilters] = useState<ISelectFiltersItems>();
  const [rangeFilters, setRangeFilters] = useState<IRangeFiltersItems>();
  const [searchFilters, setSearchFilters] = useState<ISearchFiltersItems>();

  const authors = useMemo<string[]>(() => generateListByProperty(ALL_PRODUCTS, 'author'), [ALL_PRODUCTS]);
  const categories = useMemo<string[]>(() => generateListByProperty(ALL_PRODUCTS, 'category'), [ALL_PRODUCTS]);
  const prices = useMemo<Record<string, number>>(() => generateRangeByProperty(ALL_PRODUCTS, 'price'), [ALL_PRODUCTS]);
  const rating = useMemo<Record<string, number>>(() => generateRangeByProperty(ALL_PRODUCTS, 'rating'), [ALL_PRODUCTS]);

  const products: FullProductProps[] = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      for (let key in rangeFilters) {
        if (
          rangeFilters[key as keyof typeof rangeFilters].length !== 0 &&
          !RANGE_FILTERS_CONFIG[key as keyof typeof RANGE_FILTERS_CONFIG](
            rangeFilters[key as keyof typeof rangeFilters],
            item[key as keyof typeof rangeFilters]
          )
        )
          return false;
      }
      for (let key in selectFilters) {
        if (
          selectFilters[key as keyof typeof selectFilters].length !== 0 &&
          !SELECT_FILTERS_CONFIG[key as keyof typeof SELECT_FILTERS_CONFIG](
            selectFilters[key as keyof typeof selectFilters],
            item[key as keyof typeof selectFilters]
          )
        )
          return false;
      }
      for (let key in searchFilters) {
        if (
          searchFilters[key as keyof typeof searchFilters].length !== 0 &&
          !SEARCH_FILTERS_CONFIG[key as keyof typeof SEARCH_FILTERS_CONFIG](
            searchFilters[key as keyof typeof searchFilters],
            item[key as keyof typeof searchFilters]
          )
        )
          return false;
      }
      return true;
    }).sort(SORTINGS_CONFIG[sorting as keyof typeof SORTINGS_CONFIG]);
  }, [ALL_PRODUCTS, selectFilters, rangeFilters, searchFilters, sorting]);

  const handleUpdateAuthorFilters = (authors: string[]) => {
    setSelectFilters({ ...selectFilters, author: authors } as ISelectFiltersItems);
  };

  const handleUpdateCategoriesFilters = (categories: string[]) => {
    setSelectFilters({ ...selectFilters, category: categories } as ISelectFiltersItems);
  };

  const handleUpdatePriceFilters = (prices: Record<string, number>) => {
    setRangeFilters({ ...rangeFilters, price: prices } as IRangeFiltersItems);
  };

  const handleUpdateRatingFilters = (ratings: Record<string, number>) => {
    setRangeFilters({ ...rangeFilters, rating: ratings } as IRangeFiltersItems);
  };

  const handleUpdateSearchFilters = (search: string) => {
    setSearchFilters({ ...searchFilters, title: search } as ISearchFiltersItems);
  };

  const handleUpdateSorting = (sort: string) => {
    setSorting(sort);
  };

  const sectionsArr = [
    {
      title: 'Author',
      sectionsContent: <MultiSelect list={authors} updateList={handleUpdateAuthorFilters} />,
    },
    {
      title: 'Categories',
      sectionsContent: <MultiSelect list={categories} updateList={handleUpdateCategoriesFilters} />,
    },
    {
      title: 'Price',
      sectionsContent: <DualSlider updateList={handleUpdatePriceFilters} min={prices.min} max={prices.max} />,
    },
    {
      title: 'Rating',
      sectionsContent: <DualSlider updateList={handleUpdateRatingFilters} min={rating.min} max={rating.max} />,
    },
  ];

  return (
    <div className="catalog-page wrapper">
      <Header />
      <div className="container page-content catalog-content">
        <Filter sections={sectionsArr} updateSearch={handleUpdateSearchFilters} />
        <div className="catalog-content__second-item">
          <Sort options={Object.keys(SORTINGS_CONFIG)} updateSorting={handleUpdateSorting} />
          <Catalog productsCards={products} />
        </div>
      </div>
    </div>
  );
};

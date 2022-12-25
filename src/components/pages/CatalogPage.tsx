import React, { useMemo, useState } from 'react';
import { ALL_PRODUCTS } from '../../common/data';
import { Catalog } from '../modules/Catalog';
import { Filter } from '../modules/Filtr';
import { Header } from '../modules/Header';
import { MultiSelect } from '../modules/MultiSelect';
import { Sort } from '../modules/Sort';
import { DualSlider } from '../simple/DualSlider';
import { FILTERS_CONFIG } from '../utils/filters';
import { SORTS_CONFIG } from '../utils/sorts';
import { generateListByProperty, generateRangeByProperty } from '../utils/utils';

interface CatalogPageProps {}

type FilterValue = string & string[] & Record<string, number>;

interface IFilters {
  title?: FilterValue;
  price?: FilterValue;
  author?: FilterValue;
}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [sort, setSort] = useState<string>('');
  const [filters, setFilters] = useState<IFilters>();

  const authors = useMemo<string[]>(() => generateListByProperty(ALL_PRODUCTS, 'author'), [ALL_PRODUCTS]);
  const categories = useMemo<string[]>(() => generateListByProperty(ALL_PRODUCTS, 'category'), [ALL_PRODUCTS]);
  const prices = useMemo<Record<string, number>>(() => generateRangeByProperty(ALL_PRODUCTS, 'price'), [ALL_PRODUCTS]);
  const rating = useMemo<Record<string, number>>(() => generateRangeByProperty(ALL_PRODUCTS, 'rating'), [ALL_PRODUCTS]);

  const products = useMemo(() => {
    return ALL_PRODUCTS.filter((item) => {
      for (const key in filters) {
        if (
          filters[key as keyof typeof filters].length !== 0 &&
          !FILTERS_CONFIG[key as keyof typeof FILTERS_CONFIG](filters[key as keyof typeof filters], item)
        )
          return false;
      }
      return true;
    }).sort(SORTS_CONFIG[sort as keyof typeof SORTS_CONFIG]);
  }, [filters, sort, ALL_PRODUCTS]);

  const handleUpdateAuthorFilters = (authors: string[]) => {
    setFilters({ ...filters, author: authors } as IFilters);
  };

  const handleUpdateCategoriesFilters = (categories: string[]) => {
    setFilters({ ...filters, category: categories } as IFilters);
  };

  const handleUpdatePriceFilters = (prices: Record<string, number>) => {
    setFilters({ ...filters, price: prices } as IFilters);
  };

  const handleUpdateRatingFilters = (ratings: Record<string, number>) => {
    setFilters({ ...filters, rating: ratings } as IFilters);
  };

  const handleUpdateSearchFilters = (search: string) => {
    setFilters({ ...filters, title: search } as IFilters);
  };

  const handleUpdateSorting = (sort: string) => {
    setSort(sort);
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
          <Sort options={Object.keys(SORTS_CONFIG)} updateSorting={handleUpdateSorting} />
          <Catalog productsCards={products} />
        </div>
      </div>
    </div>
  );
};

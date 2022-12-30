import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FilterValue, IFilters } from 'src/common/types';
import { ALL_PRODUCTS } from '../../common/data';
import { Catalog } from '../modules/Catalog';
import { Filter } from '../modules/Filtr';
import { Header } from '../modules/Header';
import { MultiSelect } from '../modules/MultiSelect';
import { Sort } from '../modules/Sort';
import { DualSlider } from '../simple/DualSlider';
import { FILTERS_CONFIG } from '../utils/filters';
import { parseQueryFilters, parseQuerySort, saveQueryParams } from '../utils/query';
import { SORTS_CONFIG } from '../utils/sorts';
import { generateListByProperty, generateRangeByProperty } from '../utils/utils';

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [sort, setSort] = useState<string>(() => parseQuerySort(searchParams));
  const [filters, setFilters] = useState<IFilters>(() => parseQueryFilters(searchParams));

  const authors = useMemo<string[]>(() => generateListByProperty(ALL_PRODUCTS, 'author'), [ALL_PRODUCTS]);
  const categories = useMemo<string[]>(() => generateListByProperty(ALL_PRODUCTS, 'category'), [ALL_PRODUCTS]);
  const prices = useMemo<Record<string, number>>(() => generateRangeByProperty(ALL_PRODUCTS, 'price'), [ALL_PRODUCTS]);
  const rating = useMemo<Record<string, number>>(() => generateRangeByProperty(ALL_PRODUCTS, 'rating'), [ALL_PRODUCTS]);

  const products = useMemo(
    () =>
      ALL_PRODUCTS.filter((item) => {
        return Object.keys(filters).every((key) => {
          const filter = filters[key as keyof typeof filters];
          const config = FILTERS_CONFIG[key as keyof typeof FILTERS_CONFIG];
          return !(filter.length !== 0 && !config(filter, item));
        });
      }).sort(SORTS_CONFIG[sort as keyof typeof SORTS_CONFIG]),
    [filters, sort, ALL_PRODUCTS]
  );

  useEffect(() => {
    setSearchParams(saveQueryParams(filters, sort));
  }, [filters, sort]);

  const handleSetFilter = (field: string) => (data: FilterValue) => {
    setFilters({ ...filters, [field]: data } as IFilters);
  };

  const handleUpdateSorting = (sort: string) => {
    setSort(sort);
  };

  const handleClear = () => {
    setFilters({});
    setSort('');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(document.location.href);
  };

  const sectionsArr = [
    {
      title: 'Author',
      sectionsContent: (
        <MultiSelect list={authors} startSettings={filters.author} updateList={handleSetFilter('author')} />
      ),
    },
    {
      title: 'Categories',
      sectionsContent: (
        <MultiSelect list={categories} startSettings={filters.category} updateList={handleSetFilter('category')} />
      ),
    },
    {
      title: 'Price',
      sectionsContent: (
        <DualSlider
          updateList={handleSetFilter('price')}
          startSettings={filters.price}
          min={prices.min}
          max={prices.max}
        />
      ),
    },
    {
      title: 'Rating',
      sectionsContent: (
        <DualSlider
          updateList={handleSetFilter('rating')}
          startSettings={filters.rating}
          min={rating.min}
          max={rating.max}
        />
      ),
    },
  ];

  return (
    <div className="catalog-page wrapper">
      <Header />
      <div className="container page-content catalog-content">
        <Filter
          sections={sectionsArr}
          startSearchSettings={filters.title}
          updateSearch={handleSetFilter('title')}
          copyConfig={handleCopy}
          clearConfig={handleClear}
        />
        <div className="catalog-content__second-item">
          <Sort options={Object.keys(SORTS_CONFIG)} startSetting={sort} updateSorting={handleUpdateSorting} />
          <Catalog productsCards={products} />
        </div>
      </div>
    </div>
  );
};

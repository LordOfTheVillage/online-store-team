import React, { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filters, PropertyList } from 'src/common/types';
import { ALL_PRODUCTS as cards } from '../../common/data';
import { Catalog } from '../modules/Catalog';
import { Filter } from '../modules/Filtr';
import { Header } from '../modules/Header';
import { MultiSelect } from '../modules/MultiSelect';
import { Sort } from '../modules/Sort';
import { DualSlider } from '../simple/DualSlider';
import { FILTERS_CONFIG } from '../utils/filters';
import { parseQueryFilters, parseQueryPrimitive, saveQueryFilters, saveQueryPrimitive } from '../utils/query';
import { SORTS_CONFIG } from '../utils/sorts';
import { generateListByProperty, generateRangeByProperty } from '../utils/utils';

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [productCardDisplay, setProductCardDisplay] = useState(
    () => parseQueryPrimitive(searchParams, 'display') || 'max'
  );
  const [sort, setSort] = useState<string>(() => parseQueryPrimitive(searchParams, 'sort'));
  const [filters, setFilters] = useState<Filters>(() => parseQueryFilters(searchParams, Object.keys(cards[0])));

  const products = useMemo(
    () =>
      cards
        .filter((item) => {
          return Object.keys(filters).every((key) => {
            const filter = filters[key as keyof typeof filters];
            const config = FILTERS_CONFIG[key as keyof typeof FILTERS_CONFIG];
            return !(filter.length !== 0 && !config(filter, item));
          });
        })
        .sort(SORTS_CONFIG[sort as keyof typeof SORTS_CONFIG]),
    [filters, sort, cards]
  );

  const authors = useMemo<PropertyList[]>(() => generateListByProperty(cards, products, 'author'), [products]);
  const categories = useMemo<PropertyList[]>(() => generateListByProperty(cards, products, 'category'), [products]);
  const prices = useMemo<Record<string, number>>(() => generateRangeByProperty(cards, 'price'), []);
  const stock = useMemo<Record<string, number>>(() => generateRangeByProperty(cards, 'stock'), []);

  useEffect(() => {
    setSearchParams({
      ...saveQueryFilters(filters),
      ...saveQueryPrimitive(sort as string, 'sort'),
      ...saveQueryPrimitive(productCardDisplay, 'display'),
    });
  }, [filters, sort, productCardDisplay]);

  const handleUpdateFilter = (field: string) => (data: unknown) => {
    setFilters({ ...filters, [field]: typeof data === 'string' ? [data] : data } as Filters);
  };

  const handleUpdateSorting = (sort: string) => {
    setSort(sort);
  };

  const handleClear = () => {
    setFilters({});
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(document.location.href);
  };

  const handleProductCardDisplay = (display: string) => {
    setProductCardDisplay(`${display}`);
  };

  const sectionsArr = [
    {
      title: 'Author',
      sectionsContent: (
        <MultiSelect list={authors} startSettings={filters.author} updateList={handleUpdateFilter('author')} />
      ),
    },
    {
      title: 'Categories',
      sectionsContent: (
        <MultiSelect list={categories} startSettings={filters.category} updateList={handleUpdateFilter('category')} />
      ),
    },
    {
      title: 'Price',
      sectionsContent: (
        <DualSlider
          updateList={handleUpdateFilter('price')}
          startSettings={filters.price}
          min={prices.min}
          max={prices.max}
        />
      ),
    },
    {
      title: 'Stock',
      sectionsContent: (
        <DualSlider
          updateList={handleUpdateFilter('stock')}
          startSettings={filters.stock}
          min={stock.min}
          max={stock.max}
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
          startSearchSettings={filters.search}
          updateSearch={handleUpdateFilter('search')}
          copyConfig={handleCopy}
          clearConfig={handleClear}
        />
        <div className="catalog-content__second-item">
          <Sort
            options={Object.keys(SORTS_CONFIG)}
            length={products.length}
            startSetting={sort as string}
            updateSorting={handleUpdateSorting}
            getProductCardDisplay={handleProductCardDisplay}
          />
          {products.length ? (
            <Catalog productsCards={products} productCardDisplay={productCardDisplay} />
          ) : (
            <div style={{ fontSize: '2.5rem', marginLeft: '35rem', marginTop: '5rem' }}>Products not found</div>
          )}
        </div>
      </div>
    </div>
  );
};

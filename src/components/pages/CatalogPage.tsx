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
import { generateListByProperty, generateRangeByProperty, getMaxValue, getMinValue } from '../utils/utils';

interface CatalogPageProps {}

export const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams({});
  const [productCardDisplay, setProductCardDisplay] = useState(
    () => parseQueryPrimitive(searchParams, 'display') || 'max'
  );
  const [sort, setSort] = useState<string>(() => parseQueryPrimitive(searchParams, 'sort'));
  const [filters, setFilters] = useState<Filters>(() => parseQueryFilters(searchParams, Object.keys(cards[0])));
  // const [selectedCheckbox, setSelectedCheckbox] = useState<string[]>([]);

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
  const prices = useMemo<Record<string, number>>(
    () => generateRangeByProperty(products.length ? products : cards, 'price'),
    [products]
  );
  const stock = useMemo<Record<string, number>>(
    () => generateRangeByProperty(products.length ? products : cards, 'stock'),
    [products]
  );
  const initialPrice = useMemo(() => generateRangeByProperty(cards, 'price'), []);
  const initialStock = useMemo(() => generateRangeByProperty(cards, 'stock'), []);

  // const filteredCards = useMemo(
  //   () =>
  //     cards
  //       .filter((element) => selectedCheckbox.includes(element.author) || selectedCheckbox.includes(element.category))
  //       .map(({ price }) => price),
  //   [selectedCheckbox]
  // );

  const filteredCards = useMemo(() => {
    return cards.filter((element) => {
      return (
        authors.findIndex((e) => e.realAmount > 0 && e.title === element.author) !== -1 &&
        categories.findIndex((e) => e.realAmount > 0 && e.title === element.category) !== -1
      );
    });
  }, [authors, categories]);

  const minPrice = useMemo(
    () =>
      getMinValue(
        filteredCards.map(({ price }) => price),
        prices.min
      ),
    [filteredCards]
  );

  const maxPrice = useMemo(
    () =>
      getMaxValue(
        filteredCards.map(({ price }) => price),
        prices.max
      ),
    [filteredCards]
  );

  const minStock = useMemo(
    () =>
      getMinValue(
        filteredCards.map(({ stock }) => stock),
        stock.min
      ),
    [filteredCards]
  );

  const maxStock = useMemo(
    () =>
      getMaxValue(
        filteredCards.map(({ stock }) => stock),
        stock.max
      ),
    [filteredCards]
  );

  // const filteredNames = useMemo(() => {
  //   return cards.filter((element) => {
  //     return (
  //       authors.findIndex((e) => e.realAmount > 0 && e.title === element.author) !== -1 &&
  //       categories.findIndex((e) => e.realAmount > 0 && e.title === element.category) !== -1
  //     );
  //   });
  // }, [authors, categories]);

  // const initialPrice = () => {
  //   const array = cards.map(({ price }) => price);
  //   const min = Math.min(...array);
  //   const max = Math.max(...array);
  //   return { min, max };
  // };

  // console.log('filteredCards', filteredCards);
  // console.log(getMinValue(), getMaxValue());
  // const minMaxPrice = useMemo(() => {
  //   return cards
  //     .filter((element) => selectedCheckbox.includes(element.author) || selectedCheckbox.includes(element.category))
  //     .reduce(
  //       (acc: any, value) => {

  //         if (value.price < acc.min) acc.min = value.price;
  //         if (value.price > acc.max) acc.max = value.price;
  //         return acc;
  //       },
  //       { min: 100, max: 0 }
  //       {}
  //     );
  // }, [selectedCheckbox]);

  useEffect(() => {
    setSearchParams({
      ...saveQueryFilters(filters),
      ...saveQueryPrimitive(sort as string, 'sort'),
      ...saveQueryPrimitive(productCardDisplay, 'display'),
    });
  }, [filters, sort, productCardDisplay]);

  // console.log('selectedCheckbox', selectedCheckbox);

  const handleUpdateFilter = (field: string) => (data: unknown) => {
    setFilters({ ...filters, [field]: typeof data === 'string' ? [data] : data } as Filters);
    // if (!target) return;
    // if ([`author`, 'category'].includes(field)) setSelectedCheckbox(data);
    // console.log('target', target);
    // const checked = target.checked;
    // console.log('checked', checked);
    // if ([`author`, 'category'].includes(field)) {
    //   setSelectedCheckbox(data);
    // console.log('field', field);
    // setSelectedCheckbox((prevState) => {
    //   console.log('prevState', prevState);
    //   console.log('string', string);
    //   return checked
    //     ? [...prevState, target.value].flat()
    //     : prevState.flat().filter((element) => element !== target.value);
    // });
    // }
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
          // startSettings={filters.price}
          startSettings={initialPrice}
          min={minPrice}
          max={maxPrice}
        />
      ),
    },
    {
      title: 'Stock',
      sectionsContent: (
        <DualSlider
          updateList={handleUpdateFilter('stock')}
          // startSettings={filters.stock}
          startSettings={initialStock}
          min={minStock}
          max={maxStock}
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

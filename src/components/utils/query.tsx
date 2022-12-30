import { IFilters } from 'src/common/types';

export const parseQuerySort = (params: URLSearchParams): string => {
  let result = '';
  params.forEach((v: string, k: string) => (k === 'sort' ? (result = v) : null));
  return result;
};

export const parseQueryFilters = (params: URLSearchParams): IFilters => {
  let result: IFilters = {};
  params.forEach((value: string, key: string) => {
    if (key === 'sort') return null;
    if (!value.includes('↕')) result = { ...result, [key]: [value] } as IFilters;
    else {
      const values = value.split('↕');
      if (isNaN(parseInt(values[0]))) result = { ...result, [key]: values } as IFilters;
      else result = { ...result, [key]: { min: +values[0], max: +values[1] } } as IFilters;
    }
  });
  return result;
};

export const saveQueryParams = (filters: IFilters, sort: string) => {
  let params = {};
  if (Object.keys(filters).length > 0) {
    Object.keys(filters).forEach((key) => {
      const value = filters[key as keyof typeof filters];
      if (Array.isArray(value) && value[0] === '') return;
      if (Array.isArray(value) && value.length) {
        params = { ...params, [key]: value.reduce((a: string, b: string) => a + '↕' + b) };
      } else if (typeof value === 'string') {
        params = { ...params, [key]: value };
      } else {
        const values = Object.values(value);
        if (values.length) params = { ...params, [key]: values.reduce((a: number, b: number) => a + '↕' + b) };
      }
    });
  }
  if (sort) params = { ...params, sort: sort };
  return params;
};

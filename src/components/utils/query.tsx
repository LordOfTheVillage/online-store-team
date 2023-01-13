import { Filters } from 'src/common/types';

export const parseQueryPrimitive = (params: URLSearchParams, property: string) => {
  return params.get(property) as string;
};

export const saveQueryPrimitive = (data: number | string | boolean, property: string) => {
  return data ? { [property]: `${data}` } : {};
};

export const parseQueryFilters = (params: URLSearchParams, properties: string[]): Filters => {
  let result: Filters = {};
  params.forEach((value: string, key: string) => {
    if (!properties.includes(key)) return null;
    if (!value.includes('↕')) result = { ...result, [key]: [value] } as Filters;
    else {
      const values = value.split('↕');
      if (isNaN(parseInt(values[0]))) result = { ...result, [key]: values } as Filters;
      else result = { ...result, [key]: { min: +values[0], max: +values[1] } } as Filters;
    }
  });
  return result;
};

export const saveQueryFilters = (filters: Filters) => {
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
        const values: number[] = Object.values(value);
        if (values.length) params = { ...params, [key]: values.join('↕') };
      }
    });
  }
  return params;
};

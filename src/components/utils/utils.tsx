import { FullProductProps } from "src/common/types";

export  const getProductById = (id: string, products: FullProductProps[]):FullProductProps => {
  for (const product of products) {
    if (product.id === id) return product
  }
}

export const SORTINGS_CONFIG = {
  "Сначала дешевые": (left:FullProductProps, right:FullProductProps) => left.price - right.price,
  "Сначала дорогие": (left:FullProductProps, right:FullProductProps) => right.price - left.price,
  "Сначала популярные": (left:FullProductProps, right:FullProductProps) => right.stock - left.stock,
}

export const FILTERS_CONFIG = {
  author: (author: string, sec: any) => {
    return author.includes(sec)
  },
  title: (title: string, src: string) => {
    return src.toLowerCase().includes(title.trim().toLowerCase())
  },
  // price: (range: { [x: string]: number | string; }, src: number) => {
  //   return (
  //     (range["min"] === 0 || range["min"] === ""
  //       ? true
  //       : src >= range["min"]) &&
  //     (range["max"] === 0 || range["max"] === "" ? true : src <= range["max"])
  //   )
  // },
}

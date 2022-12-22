export interface PrimaryCheckboxProps{
	id: string
	title: string
}

export interface ProductCardProps{
	title: string
	img: string
	price: number
}

export interface FullProduct{
	id: string
	title: string
	annotation: string
	category: string
	author: string
	publisher: string
	images: string[]
	price: number
}

export interface ObjectFullProduct{
	PRODUCTS: FullProduct
}
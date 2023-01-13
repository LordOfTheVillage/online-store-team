import React, { useState } from "react"

interface ProductGalleryProps{
	images: string[]
}

export const ProductGallery: React.FC<ProductGalleryProps> = (props) => {

	const [img, setImg] = useState<string>(props.images[0] || '');

	const clickOnImage = (e: React.MouseEvent) => {
		const target = e.target as HTMLElement; 
		if(target) {
			const attr: string | null = target.getAttribute('src'); 
			if(attr) setImg(attr)
		}
	}

  return (
		<div className="product__gallery gallery"> 		
			<div className="gallery__img-container">
				{props.images.map((item, i) => <img key={i} src={item} onClick={clickOnImage}/>)}
			</div>
			<img src={img} className="gallery__img"/>
		</div>
	)
}

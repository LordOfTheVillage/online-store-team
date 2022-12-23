import React, { useState } from "react"

interface ProductGalleryProps{
	imgs: string[]
}

export const ProductGallery: React.FC<ProductGalleryProps> = (props) => {

	const [img, setImg] = useState<string>(props.imgs[0]);

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
				{props.imgs.map(item => <img src={item} onClick={clickOnImage}/>)}
			</div>
			<img src={img} className="gallery__img"/>
		</div>
	)
}

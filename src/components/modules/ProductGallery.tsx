import React, { ReactElement, useState } from "react"

interface GalleryProps{
	imgs: string[]
}

const Gallery: React.FC<GalleryProps> = ({imgs}: GalleryProps) => {

	console.log(imgs);
	const [img, setImg] = useState<string>(imgs[0]);

  return (
		<div className="product__gallery gallery"> 		
			<div className="gallery__img-container">
				{imgs.map((item: string) => <img src={item} onClick={(e: React.MouseEvent): void => {const target = e.target as HTMLElement; 
					if(target) {const attr: string | null = target.getAttribute('src'); if(attr) setImg(attr)}}}/>)}
			</div>
			<img src={img} className="gallery__img" />
		</div>
	)
}

export default Gallery
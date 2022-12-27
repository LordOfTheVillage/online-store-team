import React, { ReactNode, useState } from "react"

interface ModalWindowProps{
	children: ReactNode
	classes: {
		classContent: string
		classModal: string
	}
}

export const ModalWindow: React.FC<ModalWindowProps> = ({children, classes}) => {

	const [modalClasses, setModalClasses] = useState(classes);
	
	// console.log(classes)
	console.log(modalClasses)

  return  <div className={classes.classModal}>
						<div className="modal-body" onClick = {() => setModalClasses({classModal: "modal", classContent: "modal-content"})}>
							<div className={classes.classContent} onClick={e => e.stopPropagation()}>
								{children}
							</div>
						</div>
					</div>
}

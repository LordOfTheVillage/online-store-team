import React, { ReactNode} from "react"

interface ModalWindowProps{
	children: ReactNode
	onClose: () => void
	isOpenModal: boolean
}

export const ModalWindow: React.FC<ModalWindowProps> = ({children, onClose, isOpenModal}) => {

	const classes = isOpenModal 
	? {modalClass: "modal modal-active", modalContentClass: "modal-content modal-content-active"}
	: {modalClass: "modal", modalContentClass: "modal-content"};

  return  <div className={classes.modalClass}>
						<div className="modal-body" onClick = {onClose}>
							<div className={classes.modalContentClass} onClick={e => e.stopPropagation()}>
								{children}
							</div>
						</div>
					</div>
}

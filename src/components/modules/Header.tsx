import React from "react"

export const Header: React.FC = () => {

  return (
    <header className="header">
			<div className="container col-3">
				<a className="header__logo" href="#">Logo</a>
				<div className="header__cart-total">Total Price: <span className="header__price">$0</span></div>
				<a className="header__cart btn-cart" href="#"><div className="header__cart-count">0</div></a>
			</div>
		</header>
  )
}

import React from "react"

interface HeaderProps{
}

const Header: React.FC = () => {

  return (
    <header className="header">
			<div className="container col-3">
				<a className="header__logo" href="#">Logo</a>
				<div className="header__cart-total">Total Price: <span className="header__price">$0</span></div>
				<a className="header__cart" href="#"></a>
			</div>
		</header>
  )
}

export default Header

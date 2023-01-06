import React from "react"
// import { NavLink } from "react-router-dom"
// import { Pathes } from "../utils/pathes"

export const Footer: React.FC = () => {

  return (
    <footer className="footer">
			<div className="container col-3">
				<div className="footer__item">
					<a href="https://rs.school/js/" className="footer__rs"></a>
				</div>
				<div className="footer__item"><div>Created with love <span>♡</span></div><div style={{fontSize: '17px', marginTop: '3px'}}>2023</div></div>
				<div className="footer__item">
					<a href="https://github.com/LordOfTheVillage" className="footer__git"></a>
					<a href="https://github.com/Margarita-Sipach" className="footer__git"></a>
				</div>
			</div>
		</footer>
  )
}

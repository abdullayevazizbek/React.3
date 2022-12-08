import React from 'react'

function Header() {
  return (
    <div className="header">
        <div className="canteiner">
            <div className="header__row">
                <div className="header__logo">
                    <h1>LOGO</h1>
                </div>
                <div className="header__menu">
                    <link to="/about" className="header__link">About</link>
                    <link to="/servise" className="header__link">Servise</link>
                    <link to="/portfoliu" className="header__link">Portfolio</link>
                    <link to="/contact" className="header__link">Contact</link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
import React from 'react'
import logo from '../img/snake.png'

const Header = () => {
    return  <header className ='header'>
                <a href='/#'>
                    {createLogo()}
                </a>
            </header>
}

function createLogo() {
    return <img src = {logo} alt = 'logo' className = 'header__img'/>
}

export default Header
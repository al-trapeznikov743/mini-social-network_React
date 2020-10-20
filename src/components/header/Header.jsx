import React from 'react'
import logo from '../../img/snake.png'
import classes from './Header.module.sass'

const Header = () => {
    return  <header className ={classes.header}>
                <a href='/#'>
                    {createLogo()}
                </a>
            </header>
}

function createLogo() {
    return <img src = {logo} alt = 'logo' className = {classes.img}/>
}

export default Header
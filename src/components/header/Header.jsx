import React from 'react'
import logo from '../../img/snake.png'
import styles from './Header.module.sass'

const Header = () => {
    return  <header className ={styles.header}>
                <a href='/#'>
                    {createLogo()}
                </a>
            </header>
}

function createLogo() {
    return <img src = {logo} alt = 'logo' className = {styles.img}/>
}

export default Header
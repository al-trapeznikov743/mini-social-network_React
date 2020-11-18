import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../img/snake.png'
import styles from './Header.module.sass'

const Header = (props) => {
    return  <header className ={styles.header}>
                <a href='/#'>
                    {createLogo()}
                </a>
                <div className={styles.loginBlock}>
                    {props.isAuth 
                        ? props.login
                        : <NavLink to='/login'>login</NavLink>}
                    
                </div>
            </header>
}

function createLogo() {
    return <img src = {logo} alt = 'logo' className = {styles.img}/>
}

export default Header
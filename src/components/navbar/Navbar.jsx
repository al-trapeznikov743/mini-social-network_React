import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.module.sass'

const Navbar = () => {
    return  <nav className ={styles.nav}>
                <div>
                    <NavLink to='/profile' className={styles.item} activeClassName={styles.active}>
                        Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/dialogs' className={styles.item} activeClassName={styles.active}>
                        Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/#12' className={styles.item} activeClassName={styles.active}>
                        News
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/#13' className={styles.item} activeClassName={styles.active}>
                        Music
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/#14' className={styles.item} activeClassName={styles.active}>
                        Settings
                    </NavLink>
                </div>
            </nav>
}

export default Navbar
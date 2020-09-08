import React from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
export const Nav = () => {
    const {
        navLinks,
        logo,
        navBar,
        navLink
    } = styles
    return (
        <div className="container">
            <nav className={navBar}>
                <div className={logo}>SPACE X</div>
                <ul className={navLinks}>
                    <li className={navLink}>
                        <Link to='/'>
                            Home
                    </Link>
                    </li>
                    <li className={navLink}>
                        <Link to='/launches'>
                            Launches
                    </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

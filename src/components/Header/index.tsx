import React from 'react'
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
    const {
        heading,
        text
    } = styles;
    return (
        <header>
            <h2 className={heading}>SPACE X</h2>
            <p className={text}>
                SpaceX designs, manufactures and launches advanced rockets and spacecraft.
                The company was founded in 2002 to revolutionize space technology, with
                the ultimate goal of enabling people to live on other planets.
            </p>
            <button>
                <Link to='/launches'>Launch</Link>
            </button>
        </header>
    )
}

export default Header

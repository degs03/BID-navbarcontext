import React from 'react'
import { useContext } from 'react'
import Wrapper from './Wrapper'
import styles from './Navbar.module.css'
const Navbar = () => {
    const {name} = useContext(Wrapper);
    return (
        <div className={styles.navbar}>
            <p className={styles.text}>Hi {name}!</p>
        </div>
    )
}

export default Navbar
import React from 'react'
import { useContext } from 'react'
import Wrapper from './Wrapper'
import styles from './FormWrapper.module.css'

const FormWrapper = () => {
    const {setName} = useContext(Wrapper);
    return (
        <div className={styles.box}>
            <p className={styles.text}>Your Name: <input type='text' className={styles.input} onChange={e => setName(e.target.value)}/> </p>        
        </div>
    )
}

export default FormWrapper
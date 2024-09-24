import React from 'react'
import styles from './Button.module.css'

function Button() {
    return (
        <a href="https://www.pump.fun/board" className={styles.container}>
            <button className={styles.btn}> Buy here </button>
        </a>
        
    );
}


export default Button;
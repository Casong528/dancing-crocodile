import React from 'react'
import styles from './Button.module.css'

function Button() {
    return (
        <a href="https://www.pump.fun/board">
            <button className={styles.btn}> Buy here </button>
        </a>
        
    );
}


export default Button;
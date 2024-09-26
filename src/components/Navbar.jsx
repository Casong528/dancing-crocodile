import React from 'react';
import styles from "./Navbar.module.css";
import twitter from '../assets/twitter-logo.png';
import telegram from '../assets/telegram-logo.png';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.containerLeft}>
                <a href="https://x.com/DancingAlliSol"> 
                    <img src={twitter} alt='x' className={styles.x}/>
                </a>
            </div>
            <div className={styles.containerRight}>
                <a href="https://t.me/+9sDXxZen_NxmOTZh"> 
                    <img src={telegram} alt='tele' className={styles.tele}/>
                </a>
            </div>
        </div>


 
    );
}

export default Navbar;
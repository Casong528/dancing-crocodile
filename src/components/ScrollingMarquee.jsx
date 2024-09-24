import React from 'react';
import Marquee from "react-fast-marquee";
import styles from './ScrollingMarquee.module.css';
import gator from '../assets/dancing-croc-small.gif';
import michi from '../assets/michi.png';

function ScrollingMarquee() {
    return (
        <div>
            <Marquee autofill='true' direction='right' loop='infinite' gradientColor='white' speed="50">  
                <div className={styles.gifs}>
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                    <img src={gator} alt="gator" className={styles.gifItem} />
                </div>
            </Marquee>
        </div>
    );
}

export default ScrollingMarquee;
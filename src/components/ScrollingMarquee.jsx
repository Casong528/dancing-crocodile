import React from 'react';
import Marquee from "react-fast-marquee";
import styles from './ScrollingMarquee.module.css';
import gator from '../assets/dancing-gator.gif';
import michi from '../assets/michi.png';

function ScrollingMarquee() {
    // const img = [
    //     {src: gator, alt: 'gator'},
    //     {src: gator, alt: 'gator'},
    //     {src: gator, alt: 'gator'},
    //     {src: gator, alt: 'gator'},
    //     {src: gator, alt: 'gator'},
    //     {src: gator, alt: 'gator'},
    //     {src: gator, alt: 'gator'},
    // ];

    // return (
    //     <marquee className={styles.marquee} direction='left' scrollamount='infinite'>
    //         {img.map((image, index) => (
    //             <img key={index} src={image.src} alt={image.alt} className={styles.marueeImage} />
    //         ))}
    //     </marquee>
    // );

    return (
        <div className={styles.container}>
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
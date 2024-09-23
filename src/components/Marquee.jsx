import React from 'react';
import styles from './Marquee.module.css';
import gator from '../assets/dancing-gator.gif';
import michi from '../assets/michi.png';

function Marquee() {
    const img = [
        {src: gator, alt: 'gator'},
        {src: gator, alt: 'gator'},
        {src: gator, alt: 'gator'},
        {src: gator, alt: 'gator'},
        {src: gator, alt: 'gator'},
        {src: gator, alt: 'gator'},
        {src: gator, alt: 'gator'},
    ];

    return (
        <marquee className={styles.marquee} direction='left' scrollamount='infinite'>
            {img.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className={styles.marueeImage} />
            ))}
        </marquee>
    );
}

export default Marquee;
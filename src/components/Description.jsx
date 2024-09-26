import React from 'react';
import styles from "./Description.module.css";
import croc from "../assets/dancing-croc-small.gif"

function Description() {
    return (
        <div className={styles.layout}>
            <h1 className={styles.font}>
                <img src={croc} alt="croc" />
                The Dancing Aligator is taking over Tiktok and it will rot your FYP soon as well!
                <img src={croc} alt="croc" />
            </h1>
        </div>
    );
}

export default Description;
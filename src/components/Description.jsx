import React from 'react';
import styles from "./Description.module.css";

function Description() {
    return (
        <div className={styles.layout}>
            <h1 className={styles.font}>
                This is the description for the coin
            </h1>
        </div>
    );
}

export default Description;
import styles from './Tokenomics.module.css'
import michi from '../assets/michi.png';
import croc from '../assets/dancing-croc-big.gif';
import Button from './Button.jsx'

function Tokenomics() {
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <h3 className={styles.heading}> Tokenomics </h3>
            </div>  
            <div className={styles.container}>
                <div className={styles.box}>
                    <img src={croc} alt='croc' className={styles.img} />
                    <h3 className={styles.subtitle}> Total Supply </h3>
                    <h5 className={styles.numbers}> 1,000,000,000 </h5>
                </div>
                <div className={styles.box}>
                    <img src={croc} alt='croc' className={styles.img} />
                    <h3 className={styles.subtitle}> LP Burned </h3>
                    <h5 className={styles.numbers}> 100% </h5>
                </div>
                <div className={styles.box}>
                    <img src={croc} alt='croc' className={styles.img} />
                    <h3 className={styles.subtitle}> Tax </h3>
                    <h5 className={styles.numbers}> 0% </h5>
                </div>
            </div>

            <div className={styles.box}>
                <h1 className={styles.subtitle}> CA: PLACEHOLDER</h1>
                <Button />
            </div>
        </div>


    );
}
export default Tokenomics;
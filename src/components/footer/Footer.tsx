import React from "react";
import styles from './Footer.module.css'
import stylesContainer from "../stylesComponent/styles/stylesContainer.module.css";


export const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${stylesContainer.container} ${styles.footerContainer}`}>
                <div><h2 className={styles.title}>Frolov Aleksandr</h2></div>
                <ul className={styles.socialBlock}>
                    <li className={styles.first}>1</li>
                    <li className={styles.second}>2</li>
                    <li className={styles.thirty}>3</li>
                    <li className={styles.forty}>4</li>
                    <li className={styles.first}>1</li>
                    <li className={styles.second}>2</li>
                    <li className={styles.thirty}>3</li>
                    <li className={styles.forty}>4</li>
                </ul>
                <div className={styles.reserved}>2021 All rights reserved</div>
            </div>

        </div>
    )

}
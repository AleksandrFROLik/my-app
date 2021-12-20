import React from "react";
import styles from './Work.module.css'


export const Work = () => {
    return (

        <div className={styles.workBlock}>
            <div className={styles.imageBlock}>
                <div className={styles.button}>
                    <a href="/">Click</a>
                </div>
            </div>
            <div className={styles.description}>
                <h3>Name project</h3>
                <span>Short description</span>
            </div>
        </div>


    )

}
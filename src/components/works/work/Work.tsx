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
            <h3 className={styles.workTitle}>Name project</h3>
            <span className={styles.description}>Short description</span>
        </div>


    )

}
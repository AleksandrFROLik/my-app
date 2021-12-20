import React from "react";
import styles from './Main.module.css'


export const Main = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mainContainer}>
                <div className={styles.textBlock}>
                    <span>Hi There</span>
                    <h1>I am Frolov Aleksander</h1>
                    <p>A Frontend developer</p>
                </div>
                <div className={styles.photoBlock}>
                </div>
            </div>

        </div>
    )

}
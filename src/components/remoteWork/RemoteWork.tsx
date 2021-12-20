import React from "react";
import styles from './RemoteWork.module.css'
import stylesContainer from "../stylesComponent/styles/stylesContainer.module.css";




export const RemoteWork = () => {
    return(
        <div className={styles.remoteBlock}>
            <div  className={`${stylesContainer.container} ${styles.remoteContainer}`}>
                    <h2 className={styles.title}>Remote Work</h2>
                    <a href="/" className={styles.button}>Give an offer</a>
            </div>

        </div>
    )

}
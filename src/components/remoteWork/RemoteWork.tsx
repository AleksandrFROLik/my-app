import React from "react";
import styles from './RemoteWork.module.scss'
import stylesContainer from "../stylesComponent/styles/stylesContainer.module.css";
import {Title} from "../common/title/Title";

export const RemoteWork = () => {
    return(
        <div className={styles.remoteBlock}>
            <div  className={`${stylesContainer.container} ${styles.remoteContainer}`}>
                <Title title='remote work'/>
                    <a href="/" className={styles.button}>Give an offer</a>
            </div>
        </div>
    )
}
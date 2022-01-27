import React from "react";
import styles from './Works.module.css'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/title/Title";


export const Works = () => {
    return (
        <div className={styles.worksBlock}>
            <div className={`${stylesContainer.container} ${styles.worksContainer}`}>
                <Title title='works'/>
                <div className={styles.works}>
                    <Work/>
                    <Work/>
                    <Work/>
                    <Work/>
                </div>
            </div>

        </div>
    )

}
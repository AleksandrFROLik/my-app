import React from "react";
import styles from './MainHeader.module.scss'
import {NavHeader} from "../nav/NavHeader";


export const MainHeader = () => {
    return (
        <div className={styles.headerBlock}>
            <div className={styles.headerContainer}>
                <NavHeader/>
            </div>
        </div>
    )

}
import React from "react";
import styles from './NavHeader.module.css'

export const NavHeader = () => {
    return (
        <div className={styles.nav} >
            <ul className={styles.navItem}>
                <li><a href="/">Main</a></li>
                <li><a href="/">Skills</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Contacts</a></li>
            </ul>
        </div>
    )

}
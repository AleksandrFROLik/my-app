import React from "react";
import styles from './Skills.module.css'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return(
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>skills</h2>
                <div className={styles.skills}>
                    <Skill title="HTML" description={"Any text"}/>
                    <Skill title="CSS" description={"Any text"}/>
                    <Skill title="JS" description={"Any text"}/>
                </div>
            </div>

        </div>
    )

}
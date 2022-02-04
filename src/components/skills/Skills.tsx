import React from "react";
import styles from './Skills.module.scss'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/title/Title";

export const Skills = () => {
    return(
        <div className={styles.skillsBlock}>
            <div className={`${stylesContainer.container} ${styles.skillsContainer}`}>
                <Title title='skills'/>
                <div className={styles.skills}>
                    <Skill title="HTML" description={"Any text"}/>
                    <Skill title="CSS" description={"Any text"}/>
                    <Skill title="JS" description={"Any text"}/>
                </div>
            </div>

        </div>
    )

}
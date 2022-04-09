import React from "react";
import styles from './Works.module.scss'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Work} from "./work/Work";
import {Title} from "../common/title/Title";
import todolist from '../../assets/image/todolist.jpg'
import social from '../../assets/image/social.jpg'



export const Works = () => {
    const socialImage = {
        backgroundImage: `url(${social})`
    }
    const todolistImage = {
        backgroundImage: `url(${todolist})`
    }
    return (
        <div className={styles.worksBlock}>
            <div className={`${stylesContainer.container} ${styles.worksContainer}`}>
                <Title title='works'/>
                <div className={styles.works}>
                    <Work style={socialImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={todolistImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={socialImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={todolistImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={socialImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={todolistImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={socialImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                    <Work style={todolistImage} description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."/>
                </div>
            </div>

        </div>
    )

}
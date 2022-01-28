import React from "react";
import styles from './Work.module.css'

type WorkType = {
    description: string
    style:{backgroundImage:string}
}

export const Work = ({description, style}:WorkType) => {
    return (

        <div className={styles.workBlock}>
            <div className={styles.imageBlock} style={style}>
                <div className={styles.button}>
                    <a href="/">Click</a>
                </div>
            </div>
            <div className={styles.workInfo}>
                <h3 className={styles.workTitle}>Name project</h3>
                <span className={styles.description}>{description}</span>
            </div>

        </div>


    )

}
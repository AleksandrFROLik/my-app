import React from "react";
import styles from './Contacts.module.scss'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Title} from "../common/title/Title";


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                    <Title title='contacts'/>
                    <div className={styles.inputField}>
                        <form>
                            <input/>
                            <input/>
                            <textarea/>
                        </form>
                        <button type='submit' className={styles.button}>Send</button>
                    </div>

            </div>

        </div>
    )

}
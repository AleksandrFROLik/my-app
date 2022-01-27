import React from "react";
import styles from './Contacts.module.css'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'
import {Title} from "../common/title/Title";


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>

                    {/*<h2 className={styles.title}>Contacts</h2>*/}
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
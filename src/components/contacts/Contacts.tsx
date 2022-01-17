import React from "react";
import styles from './Contacts.module.css'
import stylesContainer from '../stylesComponent/styles/stylesContainer.module.css'


export const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${stylesContainer.container} ${styles.contactsContainer}`}>
                <div className={styles.supBlock}>
                    <h2 className={styles.title}>Contacts</h2>
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

        </div>
    )

}
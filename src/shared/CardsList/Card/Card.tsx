import React from 'react'
import styles from './card.css'

export function Card() {
    return (
        <li className={styles.card}>
            <div className={styles.textContent}>
                <div className={styles.metaData}>
                    <div className={styles.userLink}>
                        <img src="#" alt="userPhoto"/>
                        <a href="#" className={styles.username}>Дмитрий Гришин</a>
                    </div>
                    <span className={styles.createdAt}>4 часа назад</span>
                </div>
                <h2  className={styles.title}>

                </h2>
            </div>
            <div className={styles.preview}>

            </div>
            <div className={styles.menu}>

            </div>
            <div className={styles.controls}>

            </div>
        </li>
    )
}
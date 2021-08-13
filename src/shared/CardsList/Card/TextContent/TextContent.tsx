import React from 'react';
import styles from './textcontent.css';

export function TextContent() {
    return (
        <div className={styles.textContent}>
            <div className={styles.metaData}>
                <div className={styles.userLink}>
                    <img src="https://cdn.forbes.ru/files/profile/bio-pic.jpg" alt="#" width={'20px'}
                         height={'20px'} className={styles.avatar}/>
                    <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
                </div>
                <span className={styles.createdAt}><span
                    className={styles.publishedLabel}>опубликовано </span>4 часа назад</span>
            </div>
            <h2 className={styles.title}>
                <a href="#" className={styles.postLink }>
                    Следует отметить, что новая модель организационной деятельности...
                </a>
            </h2>
        </div>
    );
}

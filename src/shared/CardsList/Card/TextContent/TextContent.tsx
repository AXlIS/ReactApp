import React, {useState} from 'react';
import styles from './textcontent.css';
import {Post} from "../../../Post";

interface ITextContentProps {
  text: string;
  author: string;
}

export function TextContent({text, author}: ITextContentProps) {
  const [isModalOpened, setIsModalOpened] = useState(false)

  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src="https://cdn.forbes.ru/files/profile/bio-pic.jpg" alt="#" width={'20px'}
               height={'20px'} className={styles.avatar}/>
          <a href="#user-url" className={styles.username}>{author}</a>
        </div>
        <span className={styles.createdAt}><span
          className={styles.publishedLabel}>опубликовано </span>4 часа назад</span>
      </div>
      <h2 className={styles.title}>
        <a href='#' className={styles.postLink } onClick={() => {setIsModalOpened(true)}}>
          {text}
        </a>

        {isModalOpened && (
          <Post onClose={() => setIsModalOpened(false)} />
        )}
      </h2>
    </div>
  );
}
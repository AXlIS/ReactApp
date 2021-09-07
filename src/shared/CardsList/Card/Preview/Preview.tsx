import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  url: string
}

export function Preview({url}: IPreviewProps) {
  return (
      <div className={styles.preview}>
        <img
            src={url}
            alt="#" className={styles.previewImg}/>
      </div>
  );
}

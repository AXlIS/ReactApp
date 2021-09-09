import React from 'react';
import styles from './preview.css';

interface IPreviewProps {
  url: string
}

export function Preview({url}: IPreviewProps) {
  return (
      <div className={styles.preview}>
        {console.log(url.length)}
        <img
            src={url.length > 4 ? url : 'https://cdn.dribbble.com/users/8676316/screenshots/16215773/media/60ce78ef7fc885c7d8bd9271fd9f6237.png'}
            alt="#" className={styles.previewImg}/>
      </div>
  );
}

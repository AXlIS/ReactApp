import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
      <div className={styles.preview}>
        <img
            src="https://cdn.dribbble.com/users/3281732/screenshots/16046792/media/f5643f76a179a51493a4891f422753dd.jpg"
            alt="#" className={styles.previewImg}/>
      </div>
  );
}

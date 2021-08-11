import React from 'react';
import styles from './menuitemslist.css';

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        Скрыть
      </li>
      <div className={styles.br}/>
      <li className={styles.menuItem}>
        Пожаловаться
      </li>
    </ul>
  );
}

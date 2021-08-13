import React from 'react';
import styles from './menuitem.css';
import classNames from "classnames";

interface IMenuItemProps {
  children: React.ReactNode;
  mobileNone?: boolean;
  divider?: boolean;
}

export function MenuItem({children, mobileNone = false, divider = true}: IMenuItemProps) {
  const classes = classNames(
      {[styles.mobileNone]: mobileNone},
  );

  return (
      <li className={classes}>
        <div className={styles.menuItem}>
          {children}
        </div>
        {divider && (<div className={styles.divider}/>)}
      </li>
  );
}

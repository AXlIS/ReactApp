import React from 'react';
import styles from './menu.css';
import {Dropdown} from "../../../Dropdown";
import {MenuItemsList} from "../../../MenuItemsList";
import {MenuIcon} from "../../../icons";
import {EColor, Text} from "../../../Text";
import {menuItemData} from "../../../MenuItemsList/menuItemsData";

export function Menu() {
  return (
      <div className={styles.menu}>
        <Dropdown button={
          <button className={styles.menuButton}>
            <MenuIcon/>
          </button>} isOpen={false}>

          <div className={styles.dropdown}>
            <MenuItemsList menuItems={menuItemData} postId={'1'}/>
            <button className={styles.closeButton}>
              <Text mobileSize={14} size={16} color={EColor.grey66}>
                Закрыть
              </Text>
            </button>
          </div>
        </Dropdown>
      </div>
  );
}

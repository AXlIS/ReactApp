import React from 'react';
import styles from './menuitemslist.css';
import {AddIcon, BlockIcon, CommentIcon, ShareIcon, WarningIcon} from "../icons";
import {Text} from "../Text";
import {MenuItem} from "../MenuItem";
import {TSizes} from "../Text";

interface IMenuItemsListProps {
  postId: string;
  menuItems: Array<IMenuItem>
}

export interface IMenuItem {
  size: TSizes;
  mobileSize: TSizes;
  text: string;
  children: React.ReactNode;
  mobileNone?: boolean;
  divider?: boolean;
}

export function MenuItemsList({postId, menuItems}: IMenuItemsListProps) {
  return (
      <ul className={styles.menuItemsList}>
        {menuItems.map((item) => (
            <MenuItem mobileNone={item.mobileNone} divider={item.divider}>
              {item.children}
              <Text size={item.size} mobileSize={item.mobileSize}>{item.text}</Text>
            </MenuItem>
        ))}
      </ul>
  );
}

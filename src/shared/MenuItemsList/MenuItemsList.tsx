import React from 'react';
import styles from './menuitemslist.css';
import {AddIcon, BlockIcon, CommentIcon, ShareIcon, WarningIcon} from "../icons";
import {Text} from "../Text";
import {MenuItem} from "../MenuItem";

interface IMenuItemsListProps {
  postId: string
}

export function MenuItemsList({postId}: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <MenuItem mobileNone={true}>
        <CommentIcon/>
        <Text mobileSize={12} size={14}>Комментарий</Text>
      </MenuItem>
      <MenuItem mobileNone={true}>
        <ShareIcon/>
        <Text mobileSize={12} size={14}>Поделиться</Text>
      </MenuItem>
      <MenuItem>
        <BlockIcon/>
        <Text mobileSize={12} size={14}>Скрыть</Text>
      </MenuItem>
      <MenuItem mobileNone={true}>
        <AddIcon/>
        <Text mobileSize={12} size={14}>Сохранить</Text>
      </MenuItem>
      <MenuItem divider={false}>
        <WarningIcon/>
        <Text mobileSize={12} size={14}>Пожаловаться</Text>
      </MenuItem>
    </ul>
  );
}

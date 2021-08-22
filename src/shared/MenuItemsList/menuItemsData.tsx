import React from "react";
import {AddIcon, BlockIcon, CommentIcon, ShareIcon, WarningIcon} from "../icons";
import {IMenuItem} from "./MenuItemsList";


export const menuItemData: Array<IMenuItem> = [
  {
    size: 14,
    mobileSize: 12,
    text: 'Комментарий',
    children: [<CommentIcon/>],
    mobileNone: true,
    divider: true,
  },
  {
    size: 14,
    mobileSize: 12,
    text: 'Поделиться',
    children: [<ShareIcon/>],
    mobileNone: true,
    divider: true,
  },
  {
    size: 14,
    mobileSize: 12,
    text: 'Скрыть',
    children: [<BlockIcon/>],
    mobileNone: false,
    divider: true,
  },
  {
    size: 14,
    mobileSize: 12,
    text: 'Сохранить',
    children: [<AddIcon/>],
    mobileNone: true,
    divider: true,
  },
  {
    size: 14,
    mobileSize: 12,
    text: 'Пожаловаться',
    children: [<WarningIcon/>],
    mobileNone: false,
    divider: false
  },
]

import React from 'react';
import styles from './icon.css';
import {AddIcon, CommentIcon} from "../icons";



export enum EIcons {
  block = 'BlockIcon',
  add = 'AddIcon',
  comment = 'CommentIcon',
  menu = 'MenuIcon',
  share = 'ShareIcon',
  warning = 'WarningIcon'
}

export interface IIconProps {
  width?: number;
  height?: number;
}

interface IIconSettingsProps {
  Name: EIcons;
  size?: number;
}



export function Icon({Name, size}: IIconSettingsProps) {
  const component = React.createElement(
      Name,
      {size}
  )
  console.log(component)
  return component
}

import React from 'react';
import {EColor, Text} from "../../Text";
import styles from './userblock.css'
import {AnonIcon} from "../../icons";

interface IUserBlockProps {
  avatarSrc?: string
  username?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
      <a className={styles.userBox}
         href={'https://www.reddit.com/api/v1/authorize?client_id=u2UPh9_FDPjrJbgN2kF8MA&response_type=code&\n' +
         'state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity'}>
        <div className={styles.avatarBox}>
          {avatarSrc
              ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImg}/>
              : <AnonIcon/>}
        </div>
        <div className={styles.username}>
          <Text size={20} color={username ? EColor.black : EColor.grey99}>{username || 'Anonymous'}</Text>
        </div>
      </a>
  );
}

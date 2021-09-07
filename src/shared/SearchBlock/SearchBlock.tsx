import React, {useContext} from 'react'
import styles from './SearchBlock.css'
import {UserBlock} from "./UserBlock";
import {userContext} from "../context/userContext";

export function SearchBlock() {

  const {name, avatarImg} = useContext(userContext)

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={avatarImg} username={name}/>
    </div>
  )
}

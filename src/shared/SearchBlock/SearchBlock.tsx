import React, {useEffect, useState} from 'react'
import styles from './SearchBlock.css'
import {UserBlock} from "./UserBlock";
import axios from 'axios'
import {BASE_API_URL} from "../../global";

interface ISearchBlockProps {
  token: string
}

interface IUserData {
  name?: string
  avatarImg?: string
}

export function SearchBlock({token}: ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({})
  useEffect(() => {
    console.log(token)
    axios.get(`${BASE_API_URL}v1/me`, {
      headers: {Authorization: `bearer ${token}`}
    })
        .then((res) => {
          const userData = res.data;
          setData({name: userData.name, avatarImg: userData.icon_img});
        })
        .catch()
  }, [token])

  return (
      <div className={styles.searchBlock}>
        <UserBlock avatarSrc={data.avatarImg} username={data.name}/>
      </div>
  )
}

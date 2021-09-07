import React, {useContext, useEffect, useState} from 'react'
import {tokenContext} from "../shared/context/tokenContext";
import {REDDIT_API} from "../global";
import axios from 'axios'

export function usePostsData() {
  const [data, setData] = useState({})
  const token = useContext(tokenContext)
  useEffect(() => {
    axios.get(`${REDDIT_API}best.json`, {
      headers: {Authorization: `bearer ${token}`},
      params: {limit: 5}
    })
      .then((response) => {
        setData(response.data.data)
      })
      .catch(console.log)
  }, [token])


  return [data]
}
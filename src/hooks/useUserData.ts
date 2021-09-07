import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {BASE_API_URL} from "../global";
import {tokenContext} from "../shared/context/tokenContext";

interface IUserData {
  name?: string
  avatarImg?: string
}

export function useUserData() {

  const [data, setData] = useState<IUserData>({})
  const token = useContext(tokenContext)

  useEffect(() => {
    console.log(`token in useUserData: ${token}`)
    axios.get(`${BASE_API_URL}v1/me`, {
      headers: {Authorization: `bearer ${token}`}
    })
      .then((res) => {
        const userData = res.data;
        setData({name: userData.name, avatarImg: userData.icon_img});
      })
      .catch()
  }, [token])

  return [data]
}
import React from 'react'
import {usePostsData} from "../../hooks/usePostsData";

interface IPostsContextProviderProps {
  children: React.ReactNode,
}

interface IPostsContext{
  after?: string;
  before?: string | null;
  children?: Array<any>;
  dist?: number | null;
  geo_filter?: any;
  modhash?: any
}

export const postsContext = React.createContext<IPostsContext>({})

export function PostsContextProvider({children}: IPostsContextProviderProps){
  const [posts] = usePostsData()

  return (
    <postsContext.Provider value={posts}>
      {children}
    </postsContext.Provider>
  )
}



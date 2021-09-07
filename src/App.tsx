import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/layout";
import './main.global.css'
import {Header} from "./shared/Header/header"
import {Content} from "./shared/Content/Content"
import {CardsList} from './shared/CardsList/CardsList'
import {useToken} from "./hooks/useToken";
import {tokenContext} from "./shared/context/tokenContext";
import {UserContextProvider} from "./shared/context/userContext";
import {PostsContextProvider} from "./shared/context/postsContext";


// const LIST = [
//   {text: 'some value'},
//   {text: 'second some value'},
//   {text: 'this some value too'}
// ].map(generateId)

function AppComponent() {
  const [token] = useToken()

  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>

        <PostsContextProvider>
          <Layout>
            <Header/>
            <Content>
              <CardsList/>
            </Content>
          </Layout>
        </PostsContextProvider>

      </UserContextProvider>
    </tokenContext.Provider>

  );
}

export const App = hot(() => <AppComponent/>)

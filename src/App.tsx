import React, {useEffect, useState} from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/layout";
import './main.global.css'
import {Header} from "./shared/Header/header"
import {Content} from "./shared/Content/Content"
import {CardsList} from './shared/CardsList/CardsList'
import {generateId} from "./utils/react/generateRandomIndex";
import {useToken} from "./hooks/useToken";


const LIST = [
  {text: 'some value'},
  {text: 'second some value'},
  {text: 'this some value too'}
].map(generateId)

function AppComponent() {
  const [token] = useToken()

  return (
      <Layout>
        <Header token={token}/>
        <Content>
          <CardsList/>
        </Content>
      </Layout>
  );
}

export const App = hot(() => <AppComponent/>)

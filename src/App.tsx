import React from "react";
import {hot} from "react-hot-loader/root";
import {Layout} from "./shared/Layout/layout";
import './main.global.css'
import {Header} from "./shared/Header/header"
import {Content} from "./shared/Content/Content"
import {CardsList} from './shared/CardsList/CardsList'
import {assignId, generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {GenericList} from "./shared/exemple/GeneticList";
import {merge} from "./utils/js/merge";
import {Dropdown} from "./shared/Dropdown";


const LIST = [
  {text: 'some value'},
  {text: 'second some value'},
  {text: 'this some value too'}
].map(generateId)

function AppComponent() {
  // const [list,  setList] = React.useState(LIST)
  //
  // const handleItemClick = (id: string | undefined) => {
  //   setList(list.filter((item) => item.id != id));
  // }
  //
  // const handleAdd = () => {
  //   setList(list.concat(generateId({text: generateRandomString()})))
  // }

  return (
      <Layout>
        <Header/>
        <Content>
          <CardsList/>
          {/*<div style={{padding: 20}}>*/}
          {/*  <br/>*/}
          {/*  <Dropdown*/}
          {/*      onClose={() => console.log('closed')}*/}
          {/*      onOpen={() => console.log('opened')}*/}
          {/*      isOpen={false} button={<button>Test</button>}>*/}
          {/*    <CardsList/>*/}
          {/*  </Dropdown>*/}
          {/*</div>*/}

          {/*<button onClick={handleAdd}>Add Element</button>*/}
          {/*<GenericList list={list.map(merge({onClick: handleItemClick}))}/>*/}

        </Content>
      </Layout>
  );
}

export const App = hot(() => <AppComponent/>)
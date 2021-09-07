import React, {useContext} from 'react';
import styles from './cardslist.css'
import {Card} from "./Card/Card";
import {TextContent} from "./Card/TextContent";
import {Preview} from "./Card/Preview";
import {Menu} from "./Card/Menu";
import {Controls} from "./Card/Controls";
import {postsContext} from "../context/postsContext";
import {karmaContext} from "../context/karmaContext";

export function CardsList() {
  const {children} = useContext(postsContext)
  const {Provider} = karmaContext

  return (
    <ul className={styles.cardsList} onClick={() => console.log(children)}>
      {children?.map((item) => (
        <Card key={item.data.id}>
          <TextContent text={item.data.title} author={item.data.author} url={item.data.url}/>
          <Preview url={item.data.thumbnail}/>
          <Menu/>
          <Provider value={item.data.score}>
            <Controls/>
          </Provider>
        </Card>
      ))}
    </ul>
  )
}
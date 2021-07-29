import React from 'react';
import styles from './cardslist.css'
import {Card} from "./Card/Card";
import {TextContent} from "./Card/TextContent";
import {Preview} from "./Card/Preview";
import {Menu} from "./Card/Menu";
import {Controls} from "./Card/Controls";

export function CardsList(){
    return (
        <ul className={styles.cardsList}>
            <Card>
                <TextContent/>
                <Preview/>
                <Menu/>
                <Controls/>
            </Card>
        </ul>
    )
}
import React, {ReactNode} from 'react'
import styles from './card.css'
import {TextContent} from "./TextContent";
import {Preview} from "./Preview";
import {Menu} from "./Menu";
import {Controls} from "./Controls";

interface ICardProps {
    children?: ReactNode
}

export function Card({children}: ICardProps) {
    return (
        <li className={styles.card}>
            {children}
        </li>
    )
}
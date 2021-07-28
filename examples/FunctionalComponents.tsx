import React from 'react';
import styles from "./function.css"
import {hot} from "react-hot-loader/root";

export function RandomName() {
    const [name, setName] = React.useState('Igor')
    // setState((prevState) => {...prevState, name: newName}), для обновления части состояния

    return (
        <section>
            <span className={styles.example}> {name} </span>
        </section>
    )
}


export const Header = hot(RandomName)
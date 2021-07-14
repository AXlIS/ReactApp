import {hot} from "react-hot-loader/root";
import React, {ReactNode} from "react"
import styles from "./layout.css"

interface ILayoutProps {
    children?: ReactNode // при добавлени дочерних компонентов
}

export function Layout({ children }: ILayoutProps){
    return (
        <div className={styles.layout}>
            { children }
        </div>
    )
}

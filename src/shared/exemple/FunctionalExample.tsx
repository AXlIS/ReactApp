// add(1)(1) // -> 2

// function add(leftSide: number){
//     return (rightSide: number) => leftSide + rightSide
// }

import React from "react";
import {preventDefault} from "../../utils/react/preventDefault";
import {stopPropagation} from "../../utils/react/StopPropagation";

const add = (leftSide: number) => (rightSide: number) => leftSide + rightSide

const addOne = add(1)

addOne(5)

// function addEventListenerWithDisponse(element, name, handler){
//     element.addEventListener(name, handler);
//     return () => element.removeEventListener(name, handler);
// }
//
// const dispose = addEventListenerWithDisponse(window, 'resize', () => {
//     console.log('resize')
//     dispose()
// })
const withIdKey = withKey('id')
const withIndexKey = withKey()

function Feed(props: { blocks: IBlockProps[] }) {
    return (
        <div>
            {/*{props.blocks.map((block) =>*/}
            {/*    <Block key={block.id} {...block} />*/}
            {/*)}*/}
            {props.blocks.map(withIndexKey(Block))}
        </div>
    )
}

interface IBlockProps {
    title: string;
    id: string;
}

function Block(props: IBlockProps) {
    return (
        <div>{props.title}</div>
    )
}

function withKey(key?: string) {
    return <E, T extends React.ComponentType<E>>(component: T) =>
        (props: E, index: number) =>
            React.createElement(
                component,
                // {...props, key: key ? props[key as keyof E] : index},
                {...props, key: index},
                []
            );
}

function Input(props: { onChange: (value: string) => void, value: string }) {
    return (
        //<input value={props.value} onChange={(e) => props.onChange(e.currentTarget.value)}/>
        <input value={props.value} onChange={getValue(props.onChange)}/>
    )
}

function Checkbox(props: { onChange: (value: boolean) => void, value: boolean }) {
    return (
        // <input type='checkbox' checked={props.value} onChange={(e) => props.onChange(e.currentTarget.checked)}/>
        <input type='checkbox' checked={props.value} onChange={getChecked(props.onChange)}/>
    )
}

function pickFromSyntheticEvent<T extends HTMLElement>() {
    return <K extends keyof T>(key: K) =>
        <E extends ((t: T[K]) => void)>(fn: E) =>
            (e: React.SyntheticEvent<T>) => fn(e.currentTarget[key]);
}

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value')
export const getChecked = pickFromSyntheticEvent<HTMLInputElement>()('checked')

//

function NotStandardLink(props: any) {
    // const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     props.onClick()
    // }
    // return (
    //     <a onClick={handleClick}>Hello</a>
    // )

    return (
        <a onClick={preventDefault(props.onClick)}>Hello</a>
    )
}

interface InputInProps {
    onChange: (value: string) => void;
    value: string
}

function InputIN({ onChange, value}: InputInProps) {
    return (
        <input value={value} onChange={preventDefault(stopPropagation(getValue(onChange)))}/>
    )
}
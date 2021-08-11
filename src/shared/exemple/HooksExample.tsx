// Какие бывают хуки:

// 1. useState
// 2. useEffect
// 3. useRef
// 4. useReducer
// 5. useMemo
// 6. useContext
// 7. useCallback
// 8. useImperativeHandle
// 9. useLayoutEffect
// 10. useDebugValue

import React from "react";

// React.useEffect()

interface IMyHooks {
    title: string;
    id?: string;
}

export function MyHooks({title}: IMyHooks){
    React.useEffect(() => {
        console.log('componentDidMount')
        console.log('componentWillUpdate')
        return () => {
            console.log('componentWillUnmount')
        }
    })

    React.useEffect(() => {
        console.log('componentDidMount')
        return () => {
            console.log('componentWillUnmount')
        }
    }, []) // [undefined]

    React.useEffect(() => {
        console.log('componentWillReceiveProps', title) // теперь useEffect наблюдает за  title и срабатывает при его изменении
        return () => {
            console.log('componentWillUnmount')
        }
    }, [title])

    return (
        <div>{title}</div>
    )
}

function useIsMount (){
    const [isMounted, setIsMounted] = React.useState(false)

    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    return [isMounted]
}

function calculate(items: number, multiplier: number){
    return new Array(items).fill(1).reduce((a, v) => a * multiplier)
}
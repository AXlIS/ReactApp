const mistake = [] as Array<number>;
mistake.push(1)

const BigObject = {
    "bool": true,
    "list": [{
        "old": 89,
        "young": 16
    }],
    "string": "ama string"
}

type TMyBigObject = typeof BigObject

const typedBigObject: Readonly<TMyBigObject> = BigObject // Типизировали объект и сделали его readonly, о только для внешних ключей
const typedBigObject2: MyReadonly<TMyBigObject> = BigObject

// type MyReadonly = {
//     readonly [N: string]: any
// }

// type MyReadonly = {
//     readonly [N in 'asd' | 'qwe']: N
// }

type TObjKeys = keyof TMyBigObject
type TCommitType = TMyBigObject['list'] // получение типа конкретного объекта

type MyReadonly<T> = {
    readonly [N in keyof T]: T[N]
}

// const some: MyReadonly<TMyBigObject> = {
//
// }

// type MyPartial<T> = {
//     [N in keyof T]?: T[N]
// }

type MyPick<T, K extends keyof T> = { // extends ограничивает
    [N in K]: T[N]
}

type MyReadonlyDeep<T> = {
    readonly [N in keyof T]: T[N] extends object ? MyReadonlyDeep<T[N]> : T[N]
}

type TSomeType = MyReadonlyDeep<TMyBigObject>

type RemoveReadonly<T> = T extends MyReadonlyDeep<infer E> ? E : T

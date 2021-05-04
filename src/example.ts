"use strict"

// const str = 'string'
// const num = 2
// const nan = NaN
// const obj = {}
// const arr = []
// const nul = null
// const sym = Symbol()
// const und = undefined
// const _void = void 0
// const bool = true
// const fn = () => {}

let string: string = 'sdf'

function sumTS(arr: number[]) {
    return arr.reduce((a, b) => a + b)
}

console.log(sumTS([1, 2, 3]))

const tsNumber = 2
const tsString = '2'

const result = tsString + tsNumber

type AllJsSimpleTypes = string | number | [] | undefined | null | boolean | void | symbol

// Array
const tsArray: number[] = [1, 2, 3]
const GenericArray: Array<number> = [1, 2, 3]

const unionArray: (number | string)[] = [1, 2, '3']
const unionGeneric: Array<number | string> = [1, 2, '3']

//Tuple массив фиксированной длины
const myTuple: [number, string] = [1, '2']

//Object
type myObjAlias = { a: number, b: string }
const myObj: { a: number, b: string } = {a: 1, b: '2'}

interface MyFirstInterface {
    readonly a: number;
    b: string;
    c?: number[];
}

const myObj2: MyFirstInterface = {
    a: 1,
    b: '2',
    c: [3]
}

interface IndexInterface {
    [n: string]: string;
}

const ApiAnswer: IndexInterface = {key1: 'asd', key2: 'asdf'}

// Function

function calculate(method: 'add' | 'sub', left: number, right: number): number {
    switch (method) {
        case 'add':
            return left + right;
        case 'sub':
            return left - right;
    }
}

enum Methods {
    add = 1,
    sub = 2,
}

function calculate2(method: Methods, left: number, right: number): number {
    switch (method) {
        case Methods.add:
            return left + right;
        case Methods.sub:
            return left - right;
    }
}

type TypeFn = (number: number) => number;

interface FnInterface {
    (a: number): void;
}

const ArrowFn: TypeFn = () => 4;

// Generics

const myArray: MyArray<number> = [1, 3, 2]

interface MyArray<T> {
    [n: number]: T,

    // map<U>(fn: (el: T, index: number, arr: MyArray<T>) => U): MyArray<[U]>
}

let first = myArray[0];

function identity<T>(arg: T): T {
    return arg
}

let result2 = identity(12)

function getLen<T extends Array<any>>(arr: T): number {
    return arr.length
}

getLen([1, 4, 'sdsfas', 12.7])

interface IValueWithType<T> {
    type: string;
    value: T
}

function withType<U>(arg: U): IValueWithType<U> {
    return {
        type: typeof arg,
        value: arg
    }
}

let result3 = withType(123)

// Встроенные generics

interface IExample<T> {
    type: string;
    value: T;
    isEmpty: boolean;
}

const omityedObject: Omit<IExample<string>, 'isEmpty' | 'value'> = {
    type: 'a'
} // указывает на то какой ключ исключить


const picked: Pick<IExample<string>, 'isEmpty'>= {
    isEmpty: true
} // указывает на то какой ключ взять

const partial: Partial<IExample<object>> = {} // делает все ключи не обязательными

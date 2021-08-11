import * as React from 'react';
import {getValue} from "./FunctionalExample";
import {preventDefault} from "../../utils/react/preventDefault";
import {stopPropagation} from "../../utils/react/StopPropagation";

function InputExample({value, onChange}: any) {
  return (
      <input
          value={value}
          // onChange={preventDefault(stopPropagation(getValue(onChange)))}
          // onChange={pipe(preventDefault, stopPropagation, getValue, onChange)}
          onChange={compose(onChange, getValue, stopPropagation, preventDefault)}
      />
  )
}

function compose<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U =>
      fns.reduceRight((previousValue, fn) => fn(previousValue), initialValue);
}

function pipe<U>(...fns: Function[]) {
  return <E, >(initialValue: any): U =>
      fns.reduce((previousValue, fn) => fn(previousValue), initialValue);
}

function pick<K extends string>(prop: K) {
  return <O extends Record<K, any>>(obj: O) => obj[prop]
}

const some = pick('value')({value: 1}) // => 1

function isEqual<T>(left: T) {
  return <E extends T>(right: E) => left === right;
}

const comments = [{id: 22, text: 'one'}, {id: 44, text: 'two'}]

// const filteredComments = comments.filter(({id}) => id !== 22) // => [{id: 44, text: 'two' }]
// const filteredComments = comments.filter(pipe(pick('id'), isEqual(22))) // => [{id: 44, text: 'two' }]

const createFilterBy = (prop: string) => (id: number) => pipe(pick(prop), isEqual(id))
const filterWithId = (id: number) => pipe(pick('id'), isEqual(id))
const filteredComments = comments.filter(filterWithId(22))

function cond(b: boolean) {
  return !b
}

const getValueNumber = pipe<number>(
    pick('currentTarget'),
    pick('value'),
    parseInt
)
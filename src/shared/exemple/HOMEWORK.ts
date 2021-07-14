// // 1
// type concatFn = (str1: string, str2: string) => string
//
// //2
// interface MyObjInterface {
//     howIDoIt: string;
//     simeArray: (string | number)[];
//     withData: {
//         howIDoIt: string,
//         simeArray: (string | number)[]
//     }[]
// }
//
// let obj: MyObjInterface = {
//
//     howIDoIt: "I Do It Wel",
//
//     simeArray: ["string one", "string two", 42],
//
//     withData: [{howIDoIt: "I Do It Wel", simeArray: ["string one", 23]}],
// }
//
// // 3
//
// interface MyArray<T> {
//     [n: number]: T,
//
//     reduce(fn: (elaccumulator: T, value: T) => T, initialValue: T): T
// }
//
// // 4
//
// interface IHomeTask {
//     data: string;
//     numbericData: number;
//     date: Date;
//     externalData: {
//         basis: number;
//         value: string;
//     }
// }
// type MyPartial<T> = {
//     [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
// }
//
// let homeTask: MyPartial<IHomeTask> = {
//     externalData: {
//         value: 'win'
//     }
// }

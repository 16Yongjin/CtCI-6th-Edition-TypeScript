import { range } from './../utils/index'

const insertChars = (s1: string, s2: string) =>
  range(s1.length + 1).map(i => s1.slice(0, i) + s2 + s1.slice(i, s1.length))

export const permute = str =>
  str
    .split('')
    .reduce((acc, v) => acc.concat(...acc.map(s => insertChars(s, v))), [''])

console.log(permute('abc'))

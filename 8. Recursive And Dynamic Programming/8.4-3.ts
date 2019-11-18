import { range } from './../utils/index'

const convertIntToBits = (x: number): number[] =>
  x
    .toString(2)
    .split('')
    .map(i => +i)

function subset3<T>(arr: T[]): T[][] {
  return range(1 << arr.length).map(i =>
    convertIntToBits(i).reduce(
      (acc, v, i) => (v ? acc.concat(arr[i]) : acc),
      []
    )
  )
}
console.log(subset3([1, 2, 3]))

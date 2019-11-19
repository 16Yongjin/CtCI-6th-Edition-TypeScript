import { range } from './../utils/index'

function anagramKey(str: string): string {
  const alphabets = 'abcdefghijklmnopqrstuvwxyz'

  str = str.toLowerCase()

  const arr = Array(alphabets.length).fill(0)

  range(str.length).forEach(i => (arr[str.charCodeAt(i) - 97] += 1))

  const key = arr.map((v, i) => (v > 0 ? alphabets[i] + v + '' : '')).join('')

  return key
}

function anagramKey2(str: string): string {
  return str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

console.log(anagramKey2('abdcdssda'))

function groupAnagram(arr: string[]): string[] {
  return [].concat(
    ...Object.values(
      arr
        .map(str => ({ key: anagramKey2(str), value: str }))
        .reduce(
          (acc, { key, value }) => (
            (acc[key] = acc[key] ? [...acc[key], value] : [value]), acc
          ),
          {}
        )
    )
  )
}

console.log(groupAnagram(['bca', 'aca', 'aac', 'adc', 'de', 'ed', 'abc']))

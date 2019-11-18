function _compress(source: string): string {
  if (source.length <= 0) return source

  let result = source[0]
  let count: number = 1

  for (let char of source.slice(1)) {
    if (result[result.length - 1] !== char) {
      result += count.toString() + char
      count = 0
    }
    count++
  }
  // 추가하려는 문자와 최근 문자가 달라야 숫자가 추가되는데
  // 마지막으로 추가하려는 문자는 달라지지 않으므로 숫자를 추가하면서 끝냄
  result += count.toString()

  return result.length > source.length ? source : result
}

function compress(source: string): string {
  if (source.length <= 1) return source

  let [result, count] = ['', 0]

  for (let i = 0; i < source.length; i++) {
    count++

    if (i + 1 >= source.length || source[i] != source[i + 1]) {
      result += source[i] + count
      count = 0
    }
  }

  return result.length > source.length ? source : result
}

console.log(compress('aabccccaaa'))

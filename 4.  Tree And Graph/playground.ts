const concat = (x, y) => x.concat(y)

const flatMap = (f, xs) => xs.map(f).reduce(concat, [])

Array.prototype.flatMap = function(f) {
  return flatMap(f, this)
}

const data = [[7], [3, 11], [1, 5, 9, 13]]

const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : [arr]
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [
          item,
          ...val
        ])
      ),
    []
  )
}

console.log(
  data
    .map(permutations)
    .reduce((acc, v) => acc.flatMap(i => v.map(j => i.concat(j))))
)

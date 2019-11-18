import TreeNode from './treeNode'
import arrayToBST from './4.2-1'
import printTree from './printTree'

const concat = (x, y) => x.concat(y)

const flatMap = (f, xs) => xs.map(f).reduce(concat, [])

Array.prototype.flatMap = function(f) {
  return flatMap(f, this)
}

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

const weaveAndPermutation = arr =>
  arr
    .map(permutations)
    .reduce((acc, v) => acc.flatMap(i => v.map(j => i.concat(j))))

function toArrayByLevel(tree: TreeNode): number[][] {
  const array = TreeNode.toInOrderArray(tree)

  const treeLevel = Math.floor(Math.log2(array.length)) + 1

  const result: number[][] = [...Array(treeLevel)].map(_ => [])

  function _toArrayByLevel(
    array: number[],
    start: number,
    end: number,
    resultIndex: number
  ) {
    if (end < start) return

    const mid = Math.floor((start + end) / 2)

    const firstNode = array[mid]

    result[resultIndex].push(firstNode)

    _toArrayByLevel(array, start, mid - 1, resultIndex + 1)
    _toArrayByLevel(array, mid + 1, end, resultIndex + 1)
  }

  _toArrayByLevel(array, 0, array.length - 1, 0)

  return result
}

function findBSTSequences(tree: TreeNode): number[][] {
  const array = toArrayByLevel(tree)

  return weaveAndPermutation(array)
}

const tree = arrayToBST([0, 1, 2, 3, 4, 5, 6, 7])

printTree(tree)

console.log(findBSTSequences(tree))

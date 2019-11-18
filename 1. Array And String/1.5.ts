const checkDelete = (source: string, target: string): boolean => {
  let [i, j] = [-1, 0]

  while (++i < source.length) if (source[i] === target[j]) j++

  return i - j === 1
}

const checkReplace = (source: string, target: string): boolean => {
  let [i, differentCount] = [-1, 0]

  while (++i < source.length) if (source[i] !== target[i]) differentCount++

  return differentCount === 1
}

const checkInsert = (source: string, target: string): boolean => {
  return checkDelete(target, source)
}

const checkEdit = (source: string, target: string): boolean => {
  if (source.length > target.length) return checkDelete(source, target)

  if (source.length === target.length) return checkReplace(source, target)

  if (source.length < target.length) return checkInsert(source, target)

  return false
}

const testCases = [
  { input: ['pale', 'ple'], expect: true },
  { input: ['pales', 'pale'], expect: true },
  { input: ['pale', 'bale'], expect: true },
  { input: ['pale', 'bake'], expect: false },
  { input: ['pale', 'pl'], expect: false },
  { input: ['pale', 'palees'], expect: false }
]

const testResult = testCases
  .map(({ input, expect }) => {
    if (checkEdit(input[0], input[1]) === expect)
      return `[OK] ${input.join(', ')} -> ${expect}`
    else return `[FAILED] ${input.join(', ')} -> ${expect}`
  })
  .join('\n')

console.log(testResult)

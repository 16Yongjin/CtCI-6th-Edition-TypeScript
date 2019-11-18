const add = (a, b) => a + b

function _tripleStep(stepSize: number, stepLeft: number): number {
  stepLeft = stepLeft - stepSize

  if (stepLeft === 0) return 1

  if (stepLeft < 0) return 0

  return [1, 2, 3].map(i => _tripleStep(i, stepLeft)).reduce(add)
}

function tripleStep(step): number {
  return _tripleStep(1, step) + _tripleStep(2, step) + _tripleStep(3, step)
}

console.log(tripleStep(3))

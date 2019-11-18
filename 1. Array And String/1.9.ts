function _isRotated(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  return Array.from(s2)
    .reduce((acc, v, i) => (v === s1[0] ? [...acc, i] : acc), [])
    .map(i => s2.slice(i) + s2.slice(0, i))
    .some(v => v === s1)
}

function isRotated(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  return (s1 + s1).includes(s2)
}

console.log(isRotated('waterbottle', 'terbottlewa'))

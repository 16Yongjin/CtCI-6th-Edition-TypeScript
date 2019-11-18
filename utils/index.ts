export const range = (n, l = []) => {
  while (n--) l.unshift(n)
  return l
}

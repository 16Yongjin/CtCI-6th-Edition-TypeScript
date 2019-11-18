function isPermutationOfPalindrome(str: string): boolean {
  const charCodeArray = Array.from(str.toLowerCase())
    .map(s => s.charCodeAt(0) - 97)
    .filter(c => c >= 0)

  // Toggle BitVector With XOR Operator
  const bitVector = charCodeArray.reduce(
    (bitVector, charCode) => bitVector ^ (1 << charCode),
    0
  )

  // v & v - 1 is 0 if only one bit of v is 1
  return !(bitVector & (bitVector - 1))
}

console.log(isPermutationOfPalindrome('Tact Coa'))

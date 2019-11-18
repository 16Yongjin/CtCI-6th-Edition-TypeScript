function runNFamilies(n: number): number {
  let boys = 0
  let girls = 0
  for (let i = 0; i < n; i++) {
    const genders = runOneFamily()
    girls += genders[0]
    boys += genders[1]
  }
  return girls / (boys + girls)
}

function runOneFamily(): number[] {
  let [boys, girls] = [0, 0]

  while (girls === 0) {
    if (Math.random() > 0.5) girls += 1
    else boys += 1

    const genders = [girls, boys]

    return genders
  }
}

console.log(runNFamilies(100))

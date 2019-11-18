const coins = [25, 10, 5, 1]

function countCoin(amount: number, coins: number[], index: number): number {
  if (index >= coins.length - 1) return 1

  const coinAmount = coins[index]

  let ways = 0

  for (let i = 0; i * coinAmount <= amount; i++) {
    const amountRemaining = amount - i * coinAmount
    ways += countCoin(amountRemaining, coins, index + 1)
  }

  return ways
}

console.log(countCoin(100, coins, 0))

import { createReadStream } from 'fs'

const numberOfInts = 100

async function findOpenNumber(file: string) {
  const bitField: number[] = Array(numberOfInts).fill(0)

  return new Promise(resolve => {
    const stream = createReadStream(file, { encoding: 'utf-8' })
    stream.on('data', (data: string) => {
      data
        .trim()
        .split('\n')
        .forEach(n => (bitField[Number(n)] = 1))
    })

    stream.on('close', () => {
      for (let i = 0; i < bitField.length; i++) {
        if (!bitField[i]) {
          console.log(i)
          return resolve()
        }
      }
      resolve()
    })
  })
}

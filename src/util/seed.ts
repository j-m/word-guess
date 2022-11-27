const BASE = 27n

export function sentenceToSeed(input: string): bigint {
  let seed = 0n
  Object.values(input.split('')).forEach((letter) => {
    if (letter !== ' ') {
      seed += BigInt(letter.charCodeAt(0)) - 65n + 1n
    }
    seed *= BASE
  })
  return seed
}

export function seedToSentence(seed: bigint): string {
  let sentence = ''
  while (seed > BASE) {
    seed /= BASE
    const letter: bigint = seed % BASE
    if (letter === 0n) {
      sentence += ' '
    } else {
      sentence += String.fromCharCode(Number(letter + 65n - 1n))
    }
  }
  return sentence.split('').reverse().join('')
}

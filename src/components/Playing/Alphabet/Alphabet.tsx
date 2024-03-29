import React from 'react'
import { Letter } from './Letter'

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

export interface AlphabetProps {
  guesses: string[]
  min: string
  max: string
}
export function Alphabet({ guesses, min, max }: AlphabetProps): JSX.Element {
  return (
    <div className="alphabet">
      {Object.values(ALPHABET).map((letter) => (
        <Letter
          key={letter}
          char={letter}
          guessed={guesses.includes(letter)}
          ruledOut={letter < min || letter > max}
        />
      ))}
    </div>
  )
}

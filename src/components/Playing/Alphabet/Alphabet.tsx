import React from 'react'
import Letter from './Letter'

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

interface AlphabetProps {
  guesses: string[]
  min: string
  max: string
}
const Alphabet: React.FunctionComponent<AlphabetProps> = (props: AlphabetProps) => (
  <div className="alphabet">
    {Object.values(ALPHABET).map((letter) => (
      <Letter
        key={letter}
        char={letter}
        guessed={props.guesses.includes(letter)}
        ruledOut={letter < props.min || letter > props.max}
      />
    ))}
  </div>
)
export default Alphabet

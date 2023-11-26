import React from 'react'

import { SentenceInput } from './SentenceInput'

interface SentenceWordProps {
  word: string
  inputIndex: number
  showInput: boolean
  guess: (letter: string) => void
}
export function SentenceWord(props: SentenceWordProps): JSX.Element {
  const {
    word, inputIndex, showInput, guess,
  } = props
  const letters = word.split('')
  return (
    <div className="word">
      {Object.values(letters).map((letter, letterIndex) => (showInput && letterIndex === inputIndex
        ? <SentenceInput guess={guess} />
        : (
          <span key={letterIndex} className="character">
            {letterIndex < inputIndex
              ? letter
              : undefined}
          </span>
        )))}
    </div>
  )
}

import React from 'react'

import { SentenceWord } from './SentenceWord'

interface SentenceProps {
  objective: string
  progress: string
  showInput: boolean
  guess: (letter: string) => void
}
export function Sentence(props: SentenceProps): JSX.Element {
  const {
    objective, progress, showInput, guess,
  } = props
  const words: string[] = objective.split(' ')
  return (
    <div id="sentence">
      {Object.values(words).map((word, wordIndex) => (
        <SentenceWord
          word={word}
          inputIndex={
            progress.length - words.reduce((accumulator, word, index) => accumulator + (wordIndex > index ? word.length + 1 : 0), 0 as number)
          }
          showInput={showInput}
          guess={guess}
        />
      ))}
    </div>
  )
}

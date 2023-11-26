import React from 'react'

interface LetterProps {
  char: string
  guessed: boolean
  ruledOut: boolean
}
export function Letter({ guessed, ruledOut, char }: LetterProps): JSX.Element {
  let className = 'letter'
  if (guessed) className += ' guessed'
  if (ruledOut) className += ' ruledOut'
  return (
    <span className={className}>
      {char}
    </span>
  )
}

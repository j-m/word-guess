import React from 'react'

interface SentenceInputProps {
  guess: (letter: string) => void
}
export function SentenceInput({ guess }: SentenceInputProps): JSX.Element {
  return (
    <input
      type="text"
      className="character"
      value=""
      maxLength={1}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => guess(event.target.value)}
      autoFocus
    />
  )
}

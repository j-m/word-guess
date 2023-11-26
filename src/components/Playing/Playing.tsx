import React from 'react'

import { Won } from './End/Won'
import { Lost } from './End/Lost'
import { Alphabet } from './Alphabet/Alphabet'
import { Sentence } from './Sentence/Sentence'
import { Lives } from './Lives'

type Status = 'playing' | 'won' | 'lost' | 'overtime'

interface PlayingProps {
  seed: bigint
  objective: string
  lives: number
  reset: () => void
}
export function Playing(props: PlayingProps): JSX.Element {
  const {
    seed, objective, lives, reset,
  } = props

  const [sentence, setSentence] = React.useState<string>('')
  const [guessed, setGuessed] = React.useState<string[]>([])
  const [guesses, setGuesses] = React.useState<number>(0)
  const [status, setStatus] = React.useState<Status>('playing')

  const guess = React.useCallback((letter: string) => {
    let upperLetter = letter.toUpperCase()
    if (objective[sentence.length] === upperLetter) {
      if (sentence + upperLetter === objective) {
        setSentence((current) => current + upperLetter)
        setGuessed([])
        setStatus('won')
      } else {
        if (objective[sentence.length + 1] === ' ') {
          upperLetter += ' '
        }
        setSentence((current) => current + upperLetter)
        setGuessed([])
      }
    } else if (lives - guesses === 1) {
      setGuesses((current) => current + 1)
      setStatus('lost')
    } else {
      setGuessed((current) => ([...current, upperLetter]))
      setGuesses((current) => current + 1)
    }
  }, [guesses, lives, objective, sentence])

  const continuePlaying = React.useCallback(() => {
    setStatus('overtime')
  }, [])

  let min = 'A'
  let max = 'Z'
  const nextLetter = objective[sentence.length]
  Object.values(guessed).forEach((letter) => {
    if (letter < nextLetter && letter > min) {
      min = letter
    }
    if (letter > nextLetter && letter < max) {
      max = letter
    }
  })

  return (
    <>
      {status === 'won' ? <Won /> : undefined}
      {status === 'lost' ? <Lost /> : undefined}
      <p>
        Seed:
        {seed.toString()}
      </p>
      <Alphabet
        guesses={guessed}
        min={min}
        max={max}
      />
      <Sentence
        objective={objective}
        progress={sentence}
        guess={guess}
        showInput={status === 'playing' || status === 'overtime'}
      />
      {status !== 'playing'
        ? (
          <span>
            {
              status === 'lost' ? (
                <button
                  type="button"
                  onClick={continuePlaying}
                >
                  Continue Playing
                </button>
              ) : null
            }
            <button
              type="button"
              onClick={reset}
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus
            >
              Play New Game
            </button>
          </span>
        )
        : undefined}
      {
        status === 'overtime' || guesses > lives
          ? (
            <p>
              Guesses:
              {guesses}
              {' '}
              (+
              {guesses - lives}
              )
            </p>
          )
          : (
            <Lives
              count={objective.length}
              remaining={lives - guesses}
            />
          )
      }

    </>
  )
}

import React from 'react'

import Won from './End/Won'
import Lost from './End/Lost'
import Alphabet from './Alphabet/Alphabet'
import Sentence from './Sentence/Sentence'
import Lives from './Lives'

type Status = 'playing' | 'won' | 'lost' | 'overtime'

interface PlayingProps {
  seed: bigint
  objective: string
  lives: number
  reset: () => void
}
interface PlayingState {
  sentence: string
  guessed: string[]
  guesses: number
  status: Status
}
export default class Playing extends React.PureComponent<PlayingProps, PlayingState> {
  constructor(props: PlayingProps) {
    super(props)
    this.state = {
      sentence: '',
      guessed: [],
      guesses: 0,
      status: 'playing',
    }
  }

  guess = (letter:string) => {
    letter = letter.toUpperCase()
    if (this.props.objective[this.state.sentence.length] === letter) {
      if (this.state.sentence + letter === this.props.objective) {
        this.setState((state) => ({
          ...state, sentence: state.sentence + letter, guessed: [], status: 'won',
        }))
      } else {
        if (this.props.objective[this.state.sentence.length + 1] === ' ') {
          letter += ' '
        }
        this.setState((state) => ({ ...state, sentence: state.sentence + letter, guessed: [] }))
      }
    } else if (this.props.lives - this.state.guesses === 1) {
      this.setState((state) => ({ ...state, status: 'lost', guesses: state.guesses + 1 }))
    } else {
      this.setState((state) => ({ ...state, guessed: [...state.guessed, letter], guesses: state.guesses + 1 }))
    }
  }

  continue = () => {
    this.setState({ status: 'overtime' })
  }

  render() {
    let min = 'A'
    let max = 'Z'
    const nextLetter = this.props.objective[this.state.sentence.length]
    Object.values(this.state.guessed).forEach((letter) => {
      if (letter < nextLetter && letter > min) {
        min = letter
      }
      if (letter > nextLetter && letter < max) {
        max = letter
      }
    })

    return (
      <>
        {this.state.status === 'won' ? <Won /> : undefined }
        {this.state.status === 'lost' ? <Lost /> : undefined}
        <p>
          Seed:
          {this.props.seed.toString()}
        </p>
        <Alphabet
          guesses={this.state.guessed}
          min={min}
          max={max}
        />
        <Sentence
          objective={this.props.objective}
          progress={this.state.sentence}
          guess={this.guess}
          showInput={this.state.status === 'playing' || this.state.status === 'overtime'}
        />
        {this.state.status !== 'playing'
          ? (
            <span>
              <button
                onClick={this.continue}
              >
                Continue Playing
              </button>
              <button
                onClick={this.props.reset}
                autoFocus
              >
                Play New Game
              </button>
            </span>
          )
          : undefined}
        {this.state.status === 'overtime' || this.state.guesses > this.props.lives
          ? (
            <p>
              Guesses:
              {this.state.guesses}
              {' '}
              (+
              {this.state.guesses - this.props.lives}
              )
            </p>
          )
          : (
            <Lives
              count={this.props.objective.length}
              remaining={this.props.lives - this.state.guesses}
            />
          )}

      </>
    )
  }
}

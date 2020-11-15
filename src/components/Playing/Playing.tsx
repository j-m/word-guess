import React from 'react'
import Confetti from 'react-confetti'

import Alphabet from './Alphabet'
import Word from './Word'
import Lives from './Lives'

var tweenFunctions = require('tween-functions')

interface PlayingProps {
  seed: number
  objective: string
  reset: () => void
}
interface PlayingState {
  word: string
  guesses: string[]
  lives: number
  status: 'playing' | 'won' | 'lost'
}
export default class Playing extends React.PureComponent<PlayingProps, PlayingState> {
  constructor (props: PlayingProps) {
    super(props)
    this.state = {
      word: "",
      guesses: [],
      lives: props.objective.length,
      status: 'playing'
    }
  }

  guess = (letter:string) => {
    letter = letter.toUpperCase()
    if (this.props.objective[this.state.word.length] === letter) {
      if (this.state.word + letter === this.props.objective) {
        this.setState(state => ({...state, word: state.word + letter, guesses: [], status: 'won'}))
      } else {
        if (this.props.objective[this.state.word.length + 1] === ' ') {
          letter += ' '
        }
        this.setState(state => ({...state, word: state.word + letter, guesses: []}))
      }
    } else {
      if (this.state.lives > 1) {
        this.setState(state => ({...state, guesses: [...state.guesses, letter], lives: state.lives - 1}))
      }
      if (this.state.lives === 1) {
        this.setState({lives:0, status: 'lost'})
      }
    }
  }

  render() {
    let min = 'A'
    let max = 'Z'
    const nextLetter = this.props.objective[this.state.word.length]
    Object.values(this.state.guesses).forEach(letter => { 
      if (letter < nextLetter && letter > min) {
        min = letter
      }
      if (letter > nextLetter && letter < max) {
        max = letter
      }
    })

    return (
    <>
      {this.state.status === 'won' 
        ? <Confetti
          recycle={false}
          numberOfPieces={800}
          tweenDuration={5000}
        /> 
        : undefined
      }
      {this.state.status === 'lost' 
        ? <Confetti
          recycle={false}
          numberOfPieces={100}
          tweenDuration={5000}
          tweenFunction={tweenFunctions.linear}
          drawShape={context => {
            context.font = '2rem serif'
            context.textAlign = "center"
            context.textBaseline = "middle";
            context.fillText('💩', 0, 0)
          }}
        /> 
        : undefined
      }
      <p>Seed: {this.props.seed}</p>
      <Alphabet 
        guesses={this.state.guesses}
        min={min}
        max={max}
      />
      <Word 
        objective={this.props.objective}
        word={this.state.word}
        guess={this.guess}
        status={this.state.status}
      />
      {this.state.status !== 'playing'
        ? <button 
            onClick={this.props.reset}
            autoFocus
          >
            Play Again
          </button>
        : undefined
      }
      <Lives 
        count={this.props.objective.length} 
        remaining={this.state.lives}
      />
    </>
    )
  }
}

import React from 'react'

import Won from './End/Won'
import Lost from './End/Lost'
import Alphabet from './Alphabet/Alphabet'
import Sentence from './Sentence/Sentence'
import Lives from './Lives'

interface PlayingProps {
  seed: bigint
  objective: string
  reset: () => void
}
interface PlayingState {
  sentence: string
  guesses: string[]
  lives: number
  status: 'playing' | 'won' | 'lost'
}
export default class Playing extends React.PureComponent<PlayingProps, PlayingState> {
  constructor (props: PlayingProps) {
    super(props)
    this.state = {
      sentence: "",
      guesses: [],
      lives: props.objective.length,
      status: 'playing'
    }
  }

  guess = (letter:string) => {
    letter = letter.toUpperCase()
    if (this.props.objective[this.state.sentence.length] === letter) {
      if (this.state.sentence + letter === this.props.objective) {
        this.setState(state => ({...state, sentence: state.sentence + letter, guesses: [], status: 'won'}))
      } else {
        if (this.props.objective[this.state.sentence.length + 1] === ' ') {
          letter += ' '
        }
        this.setState(state => ({...state, sentence: state.sentence + letter, guesses: []}))
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
    const nextLetter = this.props.objective[this.state.sentence.length]
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
      {this.state.status === 'won' ? <Won/> : undefined }
      {this.state.status === 'lost'  ? <Lost />  : undefined}
      <p>Seed: {this.props.seed.toString()}</p>
      <Alphabet 
        guesses={this.state.guesses}
        min={min}
        max={max}
      />
      <Sentence 
        objective={this.props.objective}
        progress={this.state.sentence}
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

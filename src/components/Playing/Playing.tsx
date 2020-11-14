import React from 'react'
import Alphabet from './Alphabet'
import Word from './Word'

interface PlayingProps {
  objective: string
  reset: () => void
}
interface PlayingState {
  word: string
  guesses: string[]
  count: number
}
export default class Playing extends React.PureComponent<PlayingProps, PlayingState> {
  constructor (props: PlayingProps) {
    super(props)
    this.state = {
      word: "",
      guesses: [],
      count:0,
    }
  }

  guess = (letter:string) => {
    letter = letter.toUpperCase()
    if (this.props.objective[this.state.word.length] === letter) {
      this.setState(state => ({...state, word: state.word + letter, guesses: []}))
    } else {
      this.setState(state => ({...state, guesses: [...state.guesses, letter], count: state.count + 1}))
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
      <Alphabet 
        guesses={this.state.guesses}
        min={min}
        max={max}
      />
      <Word 
        word={this.state.word}
        guess={this.guess}
        length={this.props.objective.length}
      />
      {this.state.word === this.props.objective 
        ? <button 
            onClick={this.props.reset}
            autoFocus
          >
            Play Again
          </button>
        : undefined
      }
      <>
      Guesses: {this.state.count}
      </>
    </>
    )
  }
}

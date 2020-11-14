import React from 'react'
import Playing from './Playing/Playing'
import StartForm from './Start/StartForm'

interface GameProps {}
interface GameState {
  word: string
  playing: boolean
  guesses: string[]
}
export default class Game extends React.PureComponent<GameProps, GameState> {
  constructor (props: GameProps) {
    super(props)
    this.state = {
      word: "",
      playing: false,
      guesses: [],
    }
  }

  start = (word:string) => this.setState({playing: true, word: word.toUpperCase()})
  reset = () => this.setState({word: "", playing: false, guesses: []})

  render() {
    return (
    <>
      {
        this.state.playing
        ? <Playing 
            objective={this.state.word} 
            reset={this.reset}
          />
        : <StartForm start={this.start}/>
      }
    </>
    )
  }
}

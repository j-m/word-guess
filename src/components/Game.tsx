import React from 'react'
import Playing from './Playing/Playing'
import StartForm from './Start/StartForm'

interface GameProps {}
interface GameState {
  seed: number | undefined
  word: string | undefined
  playing: boolean
  guesses: string[]
}
export default class Game extends React.PureComponent<GameProps, GameState> {
  constructor (props: GameProps) {
    super(props)
    this.state = {
      seed: undefined,
      word: undefined,
      playing: false,
      guesses: [],
    }
  }

  start = (seed: number, word:string) => this.setState({playing: true, seed, word})
  reset = () => this.setState({word: "", playing: false, guesses: []})

  render() {
    return (
    <>
      {
        this.state.playing
        ? <Playing 
            seed={this.state.seed!}
            objective={this.state.word!} 
            reset={this.reset}
          />
        : <StartForm start={this.start}/>
      }
    </>
    )
  }
}

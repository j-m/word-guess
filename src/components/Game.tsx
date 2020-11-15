import React from 'react'
import Playing from './Playing/Playing'
import StartForm from './Start/StartForm'

interface GameProps {}
interface GameState {
  seed: bigint | undefined
  sentence: string | undefined
  playing: boolean
  guesses: string[]
}
export default class Game extends React.PureComponent<GameProps, GameState> {
  constructor (props: GameProps) {
    super(props)
    this.state = {
      seed: undefined,
      sentence: undefined,
      playing: false,
      guesses: [],
    }
  }

  start = (seed: bigint, word:string) => this.setState({playing: true, seed, sentence: word})
  reset = () => this.setState({sentence: "", playing: false, guesses: []})

  render() {
    return (
    <>
      {
        this.state.playing
        ? <Playing 
            seed={this.state.seed!}
            objective={this.state.sentence!} 
            reset={this.reset}
          />
        : <StartForm start={this.start}/>
      }
    </>
    )
  }
}

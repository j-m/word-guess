import React from 'react'
import Playing from './Playing/Playing'
import StartForm from './Start/StartForm'

interface GameProps {}
interface GameState {
  seed: bigint | undefined
  objective: string | undefined
  playing: boolean
}
export default class Game extends React.PureComponent<GameProps, GameState> {
  constructor (props: GameProps) {
    super(props)
    this.state = {
      seed: undefined,
      objective: undefined,
      playing: false,
    }
  }

  start = (seed: bigint, word:string) => this.setState({seed, objective: word, playing: true})
  reset = () => this.setState({seed: undefined, objective: undefined, playing: false})

  render() {
    return (
    <>
      {
        this.state.playing
        ? <Playing 
            seed={this.state.seed!}
            objective={this.state.objective!} 
            lives={this.state.objective!.length}
            reset={this.reset}
          />
        : <StartForm start={this.start}/>
      }
    </>
    )
  }
}

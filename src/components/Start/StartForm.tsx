import React from 'react'
import WordInput from './WordInput'
import StartGameButton from './StartGameButton'

interface StartFormProps {
  start: (word: string) => void
}
interface StartFormState {
  word: string
}
export default class StartForm extends React.PureComponent<StartFormProps, StartFormState> {
  constructor (props: StartFormProps) {
    super(props)
    this.state = {
      word: "",
    }
  }

  render() {
    return (
    <form id="start">
      <WordInput 
        word={this.state.word} 
        onChange={(word: string)=>this.setState({word})}
      />
      <StartGameButton 
        onClick={()=>this.props.start(this.state.word)}
      />
    </form>
    )
  }
}

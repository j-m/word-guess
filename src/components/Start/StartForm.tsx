import React from 'react'
import WordInput from './WordInput'
import StartGameButton from './StartGameButton'

const BASE = 28

function seed(word: string) {
  let seed = 0
  Object.values(word.split("")).forEach(letter => {
    if (letter === " ") {
      seed += 0
    } else {
      seed += letter.charCodeAt(0) - 65 + 1
    }
    seed *= BASE
  })
  return seed
}

function word(seed: number) {
  let word: string = ""
  while (seed > BASE) {
    seed /= BASE
    seed = Math.floor(seed)
    const letter: number = seed % BASE
    if (letter === 0) {
      word += ' '
    } else {
      word += String.fromCharCode(letter + 65 - 1)
    }
  }
  return word.split("").reverse().join("")
}

interface StartFormProps {
  start: (seed: number, word: string) => void
}
interface StartFormState {
  word: string
  error: string | undefined
}
export default class StartForm extends React.PureComponent<StartFormProps, StartFormState> {
  constructor (props: StartFormProps) {
    super(props)
    this.state = {
      word: "",
      error: undefined,
    }
  }

  submit = () => {
    const input = this.state.word.toUpperCase()
    if (!input || !input.trim()) {
      this.setState({error: "Input required"})
      return
    } 
    if (/^[A-Za-z\s]+$/.test(input)) {
      this.props.start(seed(input), input)
      return
    }
    if (/^\d+$/.test(input)) {
      this.props.start(Number(input), word(Number(input)))
      return
    }
    this.setState({error: "Input should either be just letters and spaces or a numeric seed"})

  }

  render() {
    return (
    <>
      <form id="start" onSubmit={(e)=>e.preventDefault()}>
        <WordInput 
          word={this.state.word} 
          onChange={(word: string)=>this.setState({word})}
        />
        <StartGameButton 
          onClick={this.submit}
        />
      </form>
      {this.state.error 
      ? <p className="error">{this.state.error}</p>
      : undefined}
    </>
    )
  }
}

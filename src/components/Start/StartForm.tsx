import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { version } from '../../../package.json'

import SentenceInput from './SentenceInput'
import StartGameButton from './StartGameButton'
import { sentenceToSeed, seedToSentence } from '../../util/seed'

interface StartFormProps {
  start: (seed: bigint, input: string) => void
}
interface StartFormState {
  input: string
  seed: bigint | undefined
  error: string | undefined
}
export default class StartForm extends React.PureComponent<StartFormProps, StartFormState> {
  constructor(props: StartFormProps) {
    super(props)
    this.state = {
      input: '',
      seed: undefined,
      error: undefined,
    }
  }

  submit = () => {
    const input: string = this.state.input.toUpperCase()
    if (!input || !input.trim()) {
      this.setState({ error: 'Input required' })
      return
    }
    if (/^[A-Za-z\s]+$/.test(input)) {
      this.props.start(sentenceToSeed(input), input)
      return
    }
    if (/^\d+$/.test(input)) {
      this.props.start(BigInt(input), seedToSentence(BigInt(input)))
      return
    }
    this.setState({ error: 'Input should either be just letters and spaces or a numeric seed' })
  }

  showSeed = () => {
    this.setState((state) => ({ ...state, seed: sentenceToSeed(state.input.toUpperCase()) }))
  }

  onWordChange = (input: string) => {
    this.setState({ seed: undefined, input })
  }

  render() {
    return (
      <div>
        {this.state.seed
          ? <span>{this.state.seed.toString()}</span>
          : <button onClick={this.showSeed}>Show seed</button>}

        <form id="start" onSubmit={(e) => e.preventDefault()}>
          <SentenceInput
            value={this.state.input}
            onChange={this.onWordChange}
          />
          <StartGameButton
            onClick={this.submit}
          />
        </form>
        {this.state.error && <p className="error">{this.state.error}</p>}

        <div style={{ width: '100%', textAlign: 'center' }}>
          <span>
            v
            {version}
          </span>
          <span style={{ margin: '0 1rem' }}>|</span>
          <a href="https://github.com/j-m/word-guess">
            <FaGithub style={{ verticalAlign: 'middle' }} />
            Behind the scenes
          </a>
        </div>
      </div>
    )
  }
}

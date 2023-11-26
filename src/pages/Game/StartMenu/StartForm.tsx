import React from 'react'

import { TextInput } from '../../../components/TextInput/TextInput'
import { StartGameButton } from './StartGameButton'
import { sentenceToSeed, seedToSentence } from '../../../util/seed'

interface StartFormProps {
  onStart: (seed: bigint, input: string) => void
}
export function StartForm({ onStart }: StartFormProps): JSX.Element {
  const [input, setInput] = React.useState<string>('')
  const [error, setError] = React.useState<string | undefined>(undefined)
  const [seed, setSeed] = React.useState<bigint | undefined>(undefined)

  const submit = React.useCallback(() => {
    const inputUpperCased: string = input.toUpperCase()
    if (!inputUpperCased || !inputUpperCased.trim()) {
      setError('Input required')
      return
    }
    if (/^[A-Za-z\s]+$/.test(inputUpperCased)) {
      onStart(sentenceToSeed(inputUpperCased), inputUpperCased)
      return
    }
    if (/^\d+$/.test(inputUpperCased)) {
      onStart(BigInt(inputUpperCased), seedToSentence(BigInt(inputUpperCased)))
      return
    }
    setError('Input should either be just letters and spaces or a numeric seed')
  }, [input, onStart])

  const showSeed = React.useCallback(() => {
    setSeed(sentenceToSeed(input.toUpperCase()))
  }, [input])

  const onWordChange = React.useCallback((input: string) => {
    setSeed(undefined)
    setInput(input)
  }, [])

  return (
    <div>
      {seed
        ? <span>{seed.toString()}</span>
        : <button type="button" onClick={showSeed}>Show seed</button>}

      <form id="start" onSubmit={(e) => e.preventDefault()}>
        <TextInput
          value={input}
          onChange={onWordChange}
          style={{ fontSize: '3rem', fontWeight: 400 }}
        />
        <StartGameButton
          onClick={submit}
        />
      </form>
      {error === undefined ? <p className="error">{error}</p> : null}
    </div>
  )
}

import React from 'react'

interface SentenceInputProps {
  guess: (letter: string) => void
}
const SentenceInput: React.FunctionComponent<SentenceInputProps> = (props: SentenceInputProps) => {
  return (
    <input 
      type="text"
      className='character'
      value=""
      maxLength={1}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>  props.guess(event.target.value) }
      autoFocus
    />
  )
}
export default SentenceInput

import React from 'react'

interface WordInputProps {
  word: string
  onChange: (word: string)=> void
}
const WordInput: React.FunctionComponent<WordInputProps> = (props: WordInputProps)=> {
  return (
    <input 
      type="text"
      style={{fontSize:'3rem', fontWeight:400}}
      value={props.word}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>  props.onChange(event.target.value) }
      autoFocus
    />
  )
}

export default WordInput

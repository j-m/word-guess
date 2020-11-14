import React from 'react'

interface LetterProps {
  char: string
  guessed: boolean
  ruledOut: boolean
}
const Letter: React.FunctionComponent<LetterProps> = (props: LetterProps) => {
  let className = 'letter'
  if (props.guessed) className += ' guessed'
  if (props.ruledOut) className += ' ruledOut'
  return (
    <span className={className}>
      {props.char}
    </span>
  )
}
export default Letter

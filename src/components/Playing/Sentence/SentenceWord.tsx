import React from 'react'

import SentenceInput from './SentenceInput'

interface SentenceWordProps {
  word: string
  inputIndex: number
  showInput: boolean
  guess: (letter: string) => void
}
const SentenceWord: React.FunctionComponent<SentenceWordProps> = (props: SentenceWordProps)=> {
  const letters = props.word.split("")
  return (
    <div className="word">
      {Object.values(letters).map((letter, letterIndex) => 
        props.showInput && letterIndex === props.inputIndex
        ? <SentenceInput guess={props.guess}/>
        : <span key={letterIndex} className='character'>
            {letterIndex < props.inputIndex 
              ? letter 
              : undefined
            }
          </span>
      )}
    </div>
  )
}

export default SentenceWord

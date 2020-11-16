import React from 'react'

import SentenceWord from './SentenceWord'

interface SentenceProps {
  objective: string
  progress: string
  showInput: boolean
  guess: (letter: string) => void
}
const Sentence: React.FunctionComponent<SentenceProps> = (props: SentenceProps)=> {
  const words: string[] = props.objective.split(" ")
  return (
    <div id="sentence">
      {Object.values(words).map((word, wordIndex) => 
        <SentenceWord 
          word={word} 
          inputIndex={
            props.progress.length -
            words.reduce((accumulator, word, index) => accumulator + (wordIndex > index ? word.length + 1 : 0), 0 as number)  
          } 
          showInput={props.showInput}
          guess={props.guess}
        />
      )}
    </div>
  )
}

export default Sentence

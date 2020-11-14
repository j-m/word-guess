import React from 'react'

interface WordProps {
  word: string
  guess: (letter: string)=> void
  length: number
}
const Word: React.FunctionComponent<WordProps> = (props: WordProps)=> {
  return (
    <div id="word">
      {Object.values(props.word.split("")).map((letter, index) => 
        <span 
          key={`letter_${index}`}
          className='character'
         >
          {letter}
        </span>
      )}
      {props.word.length < props.length 
      ? <>
        <input 
          type="text"
          className='character'
          value=""
          maxLength={1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>  props.guess(event.target.value) }
          autoFocus
        />
        {Array.from({length: props.length - props.word.length - 1 }, (_, k) => 
          <span 
            key={`blank_${k}`}
            className='character'
          />
        )}
      </>
      : undefined}
    </div>
  )
}

export default Word

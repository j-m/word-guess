import React from 'react'

interface WordProps {
  objective: string
  word: string
  guess: (letter: string)=> void
  status: 'playing' | 'won' | 'lost'
}
const Word: React.FunctionComponent<WordProps> = (props: WordProps)=> {
  return (
    <div id="word">
      {Object.values(props.word.split("")).map((letter, index) => 
        <span 
          key={`letter_${index}`}
          className={`character ${letter === ' ' ? 'space' : ''}`}
         >
          {letter}
        </span>
      )}
      {props.status === 'playing'
      ? <input 
          type="text"
          className='character'
          value=""
          maxLength={1}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>  props.guess(event.target.value) }
          autoFocus
        />
      : undefined }
      { props.word.length < props.objective.length ? 
      Array.from({length: props.objective.length - props.word.length - (props.status === 'playing' ? 1 : 0)}, (_, index) => 
        <span 
          key={`blank_${index}`}
          className={`character ${props.objective[index + props.word.length + 1 ] === ' ' ? 'space' : ''}`}
        />
      ) :undefined  }
    </div>
  )
}

export default Word

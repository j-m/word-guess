import React from 'react'
import Confetti from 'react-confetti'

const Won: React.FunctionComponent = ()=> {
  return (
    <Confetti
      numberOfPieces={800}
      tweenDuration={5000}
    /> 
  )
}

export default Won

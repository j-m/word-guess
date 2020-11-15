import React from 'react'
import Confetti from 'react-confetti'

var tweenFunctions = require('tween-functions')

const Lost: React.FunctionComponent = ()=> {
  return (
    <Confetti
      recycle={false}
      numberOfPieces={100}
      tweenDuration={5000}
      tweenFunction={tweenFunctions.linear}
      drawShape={context => {
        context.font = '2rem serif'
        context.textAlign = "center"
        context.textBaseline = "middle";
        context.fillText('💩', 0, 0)
      }}
    />  
  )
}

export default Lost

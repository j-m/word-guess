import React from 'react'
import Confetti from 'react-confetti'

export function Won(): JSX.Element {
  return (
    <Confetti
      numberOfPieces={800}
      tweenDuration={5000}
    />
  )
}

import React from 'react'

interface LivesProps {
  count: number
  remaining: number
}
export function Lives({ count, remaining }: LivesProps): JSX.Element {
  return (
    <span id="lives">
      {Array(remaining).fill(0).map((e, i) => <span key={`remaining${i}`}>♥</span>)}
      {Array(count - remaining).fill(0).map((e, i) => <span key={`used${i}`}>♡</span>)}
    </span>
  )
}

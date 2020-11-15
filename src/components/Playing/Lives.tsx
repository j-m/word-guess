import React from 'react'

interface LivesProps {
  count: number
  remaining: number
}
const Lives: React.FunctionComponent<LivesProps> = (props: LivesProps) => {
  return (
    <span id="lives">
    { [...Array(props.remaining)].map((e, i) => <>♥</> ) }
    { [...Array(props.count - props.remaining)].map((e, i) => <>♡</> ) }
    </span>
  )
}
export default Lives

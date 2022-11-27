import React from 'react'

interface LivesProps {
  count: number
  remaining: number
}
const Lives: React.FunctionComponent<LivesProps> = (props: LivesProps) => (
  <span id="lives">
    { [...Array(props.remaining)].map((e, i) => <span key={`remaining${i}`}>♥</span>) }
    { [...Array(props.count - props.remaining)].map((e, i) => <span key={`used${i}`}>♡</span>) }
  </span>
)
export default Lives

import React from 'react'

interface StartGameButtonProps {
  onClick: ()=> void
}
const StartGameButton: React.FunctionComponent<StartGameButtonProps> = (props: StartGameButtonProps) => (
  <input
    type="submit"
    style={{ fontSize: '3rem', fontWeight: 400 }}
    value="→"
    onClick={props.onClick}
  />
)

export default StartGameButton

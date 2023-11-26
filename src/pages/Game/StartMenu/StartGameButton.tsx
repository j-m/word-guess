import React from 'react'

interface StartGameButtonProps {
  onClick: () => void
}
export function StartGameButton({ onClick }: StartGameButtonProps): JSX.Element {
  return (
    <input
      type="submit"
      style={{ fontSize: '3rem', fontWeight: 400 }}
      value="→"
      onClick={onClick}
    />
  )
}

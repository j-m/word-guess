import React from 'react'

interface TextInputProps {
  value: string
  onChange: (input: string) => void
  style?: React.CSSProperties
}
export function TextInput({ value, onChange: callback, style = undefined }: TextInputProps): JSX.Element {
  const onChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => callback(event.target.value),
    [callback],
  )
  return (
    <input
      type="text"
      style={style}
      value={value}
      onChange={onChange}
      autoFocus
    />
  )
}

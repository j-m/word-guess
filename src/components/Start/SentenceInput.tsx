import React from 'react'

interface SentenceInputProps {
  value: string
  onChange: (input: string) => void
}
export function SentenceInput({ value, onChange }: SentenceInputProps): JSX.Element {
  return (
    <input
      type="text"
      style={{ fontSize: '3rem', fontWeight: 400 }}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
      autoFocus
    />
  )
}

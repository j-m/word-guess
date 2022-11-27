import React from 'react'

interface SentenceInputProps {
  value: string
  onChange: (input: string) => void
}
const SentenceInput: React.FunctionComponent<SentenceInputProps> = (props: SentenceInputProps) => (
  <input
    type="text"
    style={{ fontSize: '3rem', fontWeight: 400 }}
    value={props.value}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onChange(event.target.value)}
    autoFocus
  />
)

export default SentenceInput

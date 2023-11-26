import React from 'react'
import { Playing } from './Playing/Playing'
import { StartForm } from './StartMenu/StartForm'

type GameState = {
  seed: bigint
  objective: string
}
export function Game(): JSX.Element {
  const [game, setGame] = React.useState<GameState | undefined>(undefined)

  const start = React.useCallback((seed: bigint, objective: string) => setGame({ seed, objective }), [])
  const reset = React.useCallback(() => setGame(undefined), [])

  if (game === undefined) {
    return <StartForm onStart={start} />
  }

  return (
    <Playing
      seed={game.seed}
      objective={game.objective}
      lives={game.objective.length}
      reset={reset}
    />
  )
}

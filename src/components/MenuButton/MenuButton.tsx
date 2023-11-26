import React from 'react'

import styles from './MenuButton.module.css'

export type MenuButtonProps = {
  label: string
  page: string
  onSetPage: (page: string) => void
}
export function MenuButton(props: MenuButtonProps): JSX.Element {
  const { label, page, onSetPage } = props
  const setPage = React.useCallback(() => onSetPage(page), [onSetPage, page])

  return (
    <div className={styles.container}>
      <h2 aria-hidden="true" className={styles.label}>{label}</h2>
      <button aria-label={label} type="button" onClick={setPage} className={styles.button} />
    </div>
  )
}

import React from 'react'

import { FaGithub } from 'react-icons/fa'
import { version } from '../../../package.json'
import styles from './Menu.module.css'

export type MenuProps = {
  children?: JSX.Element | JSX.Element[]
  setPage: (page: string) => void
  backMenu?: string
}
export function Menu(props: MenuProps): JSX.Element {
  const { children, setPage, backMenu } = props
  const onClickBack = React.useCallback(() => {
    if (backMenu === undefined) return
    setPage(backMenu)
  }, [backMenu, setPage])

  return (
    <div className={styles.page}>
      {backMenu !== undefined ? <button aria-label="back" type="button" onClick={onClickBack} className={styles.back}> &larr; Back</button> : null}
      {children}
      <div className={styles.footer}>
        <span className={styles.version}>
          v
          {version}
        </span>
        <span className={styles.separator}>|</span>
        <a href="https://github.com/j-m/word-guess">
          <FaGithub className={styles.github} />
          Behind the scenes
        </a>
      </div>
    </div>
  )
}

import React from 'react'

import style from './index.css'

const Logo = () => (
  <div />
)

const Backdrop = () => (
  <div className={style.content}>
    <Logo />
  </div>
)

/**
 * Main component.
 * @return {Component}
 */
export const Praline = () => (
  <div className={style.container}>
    <Backdrop />
  </div>
)

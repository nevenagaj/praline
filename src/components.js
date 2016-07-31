import React from 'react'

import style from './styles/index.css'

const Header = () => (
  <header className={style.header}>
    <h3>Handmade</h3>
    <h2>Pralines</h2>
    <h4>From finest Belgian chocolate</h4>
  </header>
)

const Content = () => (
  <div className={style.content}>
    Foobar
  </div>
)

// Main appliation component.
export const Praline = () => (
  <div className={style.container}>
    <Header />
    <Content />
  </div>
)

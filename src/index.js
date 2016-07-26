import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'

import {Praline} from './components'

/**
 * IIFE. Mounts the main component to the page.
 */
(function main () {
  const container = document.createElement('div')
  document.body.appendChild(container)

  ReactDOM.render(<Praline />, container)
})()

import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'

import {Praline} from './components'
import webfont from './lib/webfont'

// IIFE. Mounts the main component to the page.
(function main () {
  // Load fonts.
  webfont({
    families: ['Amatic SC'],
    text: 'PRALINES'
  })

  webfont({
    families: ['Raleway:400,400i,500,700'],
    text: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  })

  const container = document.createElement('article')
  document.body.appendChild(container)

  ReactDOM.render(<Praline />, container)
})()

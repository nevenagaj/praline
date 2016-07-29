import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import WebFont from 'webfontloader'

// Load fonts.
WebFont.load({
  classes: false,
  events: false,
  google: {
    families: ['Amatic SC', 'Raleway:400,400i,500,700'],
    text: 'abcdefghijklmnopqrstuvwxyz'
  }
})

import {Praline} from './components'

// IIFE. Mounts the main component to the page.
(function main () {
  const container = document.createElement('article')
  document.body.appendChild(container)

  ReactDOM.render(<Praline />, container)
})()

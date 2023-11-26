import React from 'react'
import { createRoot } from 'react-dom/client'
import { Game } from './components/Game'

import './index.css'

const container = document.getElementById('app')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
)

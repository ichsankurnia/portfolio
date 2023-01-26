import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'

import './index.css'
import 'react-lazy-load-image-component/src/effects/blur.css';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

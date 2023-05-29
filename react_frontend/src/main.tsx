import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import './assets/CSS/reset.scss'
import "./assets/CSS/style.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

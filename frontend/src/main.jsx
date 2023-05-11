import React from 'react'
import ReactDOM from 'react-dom/client'

//functions
import { App } from './containers/App.jsx'

//css
import './css/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

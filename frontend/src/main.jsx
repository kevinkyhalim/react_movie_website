import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './css/index.css'
import App from './App.jsx'

// find the root div inside html file
createRoot(document.getElementById('root')).render(
// run the App.jsx
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

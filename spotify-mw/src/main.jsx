import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import PlayerConProvider from './context/Playerconext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerConProvider>
      <App /> {/* now this app component be props.childeren in the context and can use the value data */}
      </PlayerConProvider>
    </BrowserRouter>

  </StrictMode>,
)

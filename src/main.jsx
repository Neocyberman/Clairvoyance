import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Pages from './components/Pages.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Pages />
    {/* <App /> */}
  </StrictMode>,
)

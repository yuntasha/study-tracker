import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import AppContainer from './context/AppContainer.tsx'
import './main.module.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <AppContainer> */}
      <App />
    {/* </AppContainer> */}
  </StrictMode>
)

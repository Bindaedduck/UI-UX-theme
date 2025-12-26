import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import HistoryBoard from './HistoryBoard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HistoryBoard />
  </StrictMode>,
)

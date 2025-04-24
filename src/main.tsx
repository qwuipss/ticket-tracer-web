import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/TaskInfoCard.css'
import './styles/Header.css'
import './styles/Sidebar.css'
import './styles/Board.css'
import './styles/Timeline.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// DÉPENDANCES
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'

// STYLE
import './index.css'

// COMPOSANT
import App from './App.tsx'

/** Point d'entrée principal de l'application */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

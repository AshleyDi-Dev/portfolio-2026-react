import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

// Consolidated stylesheets (load order matters: base -> layout -> components -> pages)
import './styles/base.css'
import './styles/layout.css'
import './styles/components.css'
import './styles/case-study.css'
import './styles/pages/home.css'
import './styles/pages/projects.css'
import './styles/pages/about.css'
import './styles/pages/skills.css'
import './styles/pages/contact.css'
import './styles/pages/not-found.css'
import './styles/case-studies/firewatchbc.css'
import './styles/case-studies/forme.css'
import './styles/case-studies/lanotte.css'
import './styles/case-studies/realstreet.css'
import './styles/case-studies/velvetroom.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
)

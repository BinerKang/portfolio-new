import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import ActiveSectionContextProvider from "./context/activeSectionContext"
import ThemeContextProvider from "./context/theme-context"
import Header from './components/Header'
import Footer from './components/footer'
import ThemeSwitch from './components/theme-switch'
import { SnackbarProvider } from 'notistack'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ActiveSectionContextProvider>

        <SnackbarProvider autoHideDuration={1800} anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
          <Header />
          <App />
          <Footer />
        </SnackbarProvider>
        <ThemeSwitch />
      </ActiveSectionContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>,
)

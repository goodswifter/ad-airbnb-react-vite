// import { StrictMode } from 'react'
import 'normalize.css'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import App from '@/App.jsx'
import './assets/css/index.less'
import theme from './assets/theme'
import store from './store'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </Provider>
  // </StrictMode>
)

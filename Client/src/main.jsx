import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
import { AuthContext } from './Context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext value>
    <Provider store={store}>
    <App />
    </Provider>
    </AuthContext>
  </StrictMode>,
)

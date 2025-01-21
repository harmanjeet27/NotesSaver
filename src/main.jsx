import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Store from './Redux/Store'
import { Provider } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {Store}
    >
      <App/>
      <Toaster />
    </Provider>
  </StrictMode>,
)

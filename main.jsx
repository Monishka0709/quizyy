import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './src/App.jsx'
import { ToastContainer, toast } from 'react-toastify';
  



createRoot(document.getElementById('root')).render(
  
    <StrictMode>
    <App />
    </StrictMode>
  
)

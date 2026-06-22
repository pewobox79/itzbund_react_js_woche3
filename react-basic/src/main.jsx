import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MainLayout from './layouts/MainLayout.jsx'


const root = document.getElementById('root')

createRoot(root).render(
  <MainLayout>
    <App />
  </MainLayout>
)

import React from 'react'
import ReactDOM, { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const rootElement = document.getElementById('root');

const root = createRoot(rootElement as Element);

root.render(
    <App />
)

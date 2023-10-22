import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router }  from 'react-router-dom'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css';
import '../globals.scss'

const root = document.createElement('div');
root.id = 'root';

document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Theme accentColor='' radius=''>
      <Router>
        <App />
      </Router>
    </Theme>
  </React.StrictMode>,
)

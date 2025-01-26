import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx';
import { BrowserRouter } from 'react-browser-dom'



ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  // utiliser seulement pour le développement, pour gérer les erreurs 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


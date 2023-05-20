import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp'
import './styles.css';

/*Estructura de archivos: https://es.legacy.reactjs.org/docs/faq-structure.html */
/*Lectura complementaria: https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76*/

ReactDOM.createRoot(document.getElementById('root')).render(
  //StrictMode: Solo se aplica en desarrollo
  //Documentacion: https://legacy.reactjs.org/docs/strict-mode.html
  <React.StrictMode> 
    <GifExpertApp />
  </React.StrictMode>,
)

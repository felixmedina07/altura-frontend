import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createGlobalStyle} from 'styled-components'
export const AppRoot = createGlobalStyle`
@font-face {
  font-family: "Montserrat-Bold";
  src: local("Montserrat-Bold"),
   url("./assets/font/Montserrat-Bold.ttf");
  font-weight: bold;
  }
  @font-face {
    font-family: "Montserrat-Regular";
    font-style: normal;
    src: local("Montserrat-Regular"),
     url("./assets/font/Montserrat-Regular.ttf");
    }
    @font-face {
      font-family: "Montserrat-Italic";
      src: local("Montserrat-Italic"),
       url("./assets/font/Montserrat-Italic.ttf");
       font-style: italic;
      }
`;
ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
    <App />
  </React.StrictMode>,
  document.getElementById('root') 
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './pages/App';
import "./css/Navbar.css"
import "./css/Home.css"
import "./css/Main.css"
import "./css/AboutPage.css"
import "./css/Resume.css"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom" 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

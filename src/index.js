import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Hero from './components/Hero';
import './scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hero />
    {/* <App /> */}
  </React.StrictMode>
);

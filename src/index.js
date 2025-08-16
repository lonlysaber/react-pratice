import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './classComponents/App';
import App2 from './classComponents/App2';
import App4 from './functionComponents/App4';
import App5 from './functionComponents/App5'
import App6 from './functionComponents/App6'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h2>你好</h2>
    <App/>
    <App2/>
    <App4/>
    <App5/>
    <App6/>
  </React.StrictMode>
);

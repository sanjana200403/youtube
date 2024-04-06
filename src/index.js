import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppContext } from './Context/contextapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<AppContext>


    <App />
</AppContext>
    


  
  
);



reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PostState } from './context/PostState';



ReactDOM.render(
    <React.StrictMode>
      <PostState>
        <App />
      </PostState>
    </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

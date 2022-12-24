import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ColumnComponent from './ColumnComponent';
import ColumnComponentCenter from './ColumnComponentCenter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ColumnComponent
    columnPosition = {0}
    head = "WORDS"
    />
    <ColumnComponentCenter/>
    <ColumnComponent
    columnPosition = {1}
    head = "MEANINGS"
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default root;

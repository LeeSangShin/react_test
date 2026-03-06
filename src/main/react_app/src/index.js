import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './views/layout/layout.js';
import Detail_1 from './views/Detail_1.js';
import Detail_2 from './views/Detail_2.js';
import Home from './views/home.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/d1" element={<Detail_1 />} />
        <Route path="/d2" element={<Detail_2 />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
/*
  <React.StrictMode>
    <App />
  </React.StrictMode>
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

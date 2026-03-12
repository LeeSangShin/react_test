import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Layout from './views/layout/layout.js';
import ReqPage from './views/work/ReqPage.js';
import DataInsert from './views/work/DataInsert.js';
import GridPage from './views/work/grid_page.js';
import Home from './views/home.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reqPage" element={<ReqPage />} />
        <Route path="/dataInsert" element={<DataInsert />} />
        <Route path="/gridPage" element={<GridPage />} />
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

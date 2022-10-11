import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Layout from "./components/layout"
import { BrowserRouter } from "react-router-dom";
import './style/style.scss'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Layout>
              <App />
          </Layout>
      </BrowserRouter>
  </React.StrictMode>
);



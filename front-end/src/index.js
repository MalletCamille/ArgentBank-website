import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import User from '../src/pages/User/User.jsx';
import Error from '../src/pages/Error/Error.jsx'
import Layout from '../src/components/Layout/layout.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Router>
          <Layout>
            <Routes>  
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/user" element={<User />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </Layout>  
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react'
import { ReactDOM } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);
root.render(
  <React.StrictMode>
    <Router>
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Signe-in />} />
          <Route path="/user" element={<User />} />
          <Route path="*" element={<Error />} />
        </Routes>  
    </Router>
  </React.StrictMode>
)
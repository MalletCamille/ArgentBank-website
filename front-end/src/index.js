import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import User from './pages/User/User.jsx';
import Error from './pages/Error/Error.jsx'
import Layout from './components/Layout/layout.jsx'
import Protected from './components/ProtectedRoute/Protected.jsx';
import { store } from './store/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>  
          <Router>
            <Layout className='layout'>
              <Routes>  
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/user" element={
                  <Protected>
                    <User />
                  </Protected>
                } />
                <Route path="*" element={<Error />} />
              </Routes>
            </Layout>  
          </Router>
        </Provider>
  </React.StrictMode>
);


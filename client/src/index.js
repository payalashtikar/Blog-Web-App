import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Logout from './component/Logout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<App />} />
  //     <Route path='/login' element={<Login />} />
  //     <Route path='/logout' element={<Logout />} />
  //     <Route path='*' element={'error'}/>
  //   </Routes>
  // </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

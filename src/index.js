import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom' 

import App from './App';

import './index.css';
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

import { About, Book, Books } from './Components';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path='/'>
          <Route path='/about' element={<About />} />
          <Route path='/books' element={<Books />} >
            <Route index element={<>
            <h3 className='bg-secondary p-1 rounded'>لفطا یک کتاب انتخاب کنید</h3>
            </>}/>
            <Route path=':bookId' element={<Book/>}/>
          </Route>
          <Route path='*'element={<div className='alert alert-danger m-5'>
            صفحه مورد نظر یافت نشد
          </div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


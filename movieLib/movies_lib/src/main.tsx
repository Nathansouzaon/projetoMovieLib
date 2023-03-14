import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Movie from './pages/Movie';
import Search from './pages/Search';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
           <Route path="" element={<App/>}> 
                <Route path="/" element={<Home/>}/>
                <Route path="movie/:id" element={<Movie/>}/>
                <Route path="search" element={<Search/>}/>
           </Route>
        </Routes>
      
      </BrowserRouter>
  </React.StrictMode>,
)

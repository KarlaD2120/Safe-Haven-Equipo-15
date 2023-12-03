import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.scss'
import './assets/sass/main.scss'
import Home from './assets/pages/home/home'
import Signin from './assets/pages/signin/signin';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}
export default App
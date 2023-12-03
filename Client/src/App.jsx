import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import './assets/sass/main.scss'
import Home from './assets/pages/home/home'
import HomeLogin from './assets/pages/homelogin/homelogin'
import Signin from './assets/pages/signin/signin';

function App() {
  return (
    <div>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/homelogin" element={<HomeLogin />} />
    </Routes>
    </BrowserRouter>
    </div>
    
  );
}
export default App
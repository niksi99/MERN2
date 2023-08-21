
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home  from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login'
import CreateSwimmer from './pages/CreateSwimmer'
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/create-swimmer" element={<CreateSwimmer/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

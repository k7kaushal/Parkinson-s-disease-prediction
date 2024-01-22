import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home'
import Predict from './components/Predict'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
      <BrowserRouter>
        <NavbarComponent/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/predict" element={<Predict/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;

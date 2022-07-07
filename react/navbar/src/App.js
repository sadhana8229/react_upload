import './App.css';
import Navbar from './Component/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';

function App() {
  return (
    <>
    <Navbar />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} exact />
      </Routes>
    </>
  );
}

export default App;

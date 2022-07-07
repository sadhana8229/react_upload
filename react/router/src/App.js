import './App.css';
import Menu from './Component/Router/Menu';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Component/Screens/Homepage';
import About from './Component/Screens/About';
import Services from './Component/Screens/Services';
import Contact from './Component/Screens/Contact';
import Signin from './Component/Signin';


function App() {
  return (
      <>
      <div>
      <Menu />
      
      <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/services" element={<Services />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route path="/signin" element={<Signin />}></Route>
      </Routes>
      </div>
    {/* jkawklakwdkawdkl   */}
      
      </>
  );
}

export default App;

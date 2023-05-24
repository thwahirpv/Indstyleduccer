import './App.css';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Contact from './Components/Contact/contact'

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App;

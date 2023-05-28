import './App.css';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Contact from './Components/Contact/contact'
import Casual from './Components/CataloguePages/casual';
import Bamboo from './Components/CataloguePages/bamboo';
import Livingroom from './Components/CataloguePages/livingroom';

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
        <Route path='/casual' element={<Casual/>}/>
        <Route path='/bamboo' element={<Bamboo/>}/>
        <Route path='/livingroom' element={<Livingroom/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App;

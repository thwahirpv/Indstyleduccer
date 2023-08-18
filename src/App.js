import './App.css';
import Home from './Routes/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import Contact from './Components/Contact/contact'
import RomanBlinds from './Components/CataloguePages/romanBlinds';
import FullLength from './Components/CataloguePages/fullLength';
import ZeebraBlinds from './Components/CataloguePages/zeebraBlinds';
import HeadRest from './Components/CataloguePages/headRest';
import FrimeWork from './Components/CataloguePages/frimeWork';
import Sofa from './Components/CataloguePages/sofa';

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
        <Route path='/romanBlinds' element={<RomanBlinds/>}/>
        <Route path='/fullLength' element={<FullLength/>}/>
        <Route path='/zeebraBlinds' element={<ZeebraBlinds/>}/>
        <Route path='/headRest' element={<HeadRest/>}/>
        <Route path='/frimeWork' element={<FrimeWork/>}/>
        <Route path='/sofa' element={<Sofa/>}/>
      </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Mainpage'
import Services from './components/Services';
import Team from './components/Team';
import Works from './components/Works';
import Footer from './components/Footer';
import Contact from './components/Contact_Us';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import './style.css';


function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/creat8' element={<Main/>} />
    <Route path='/services' element={<Services/>} />
    <Route path='/team' element={<Team/>} />
    <Route path='/works' element={<Works/>} />
    <Route path='/contact' element={<Contact/>} />
   </Routes>
   <Footer/>
   </BrowserRouter>
    </>
  );
}

export default App;

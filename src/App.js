import React from 'react'
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home';
import Gotop from './Components/Gotop';
import Projects from './Components/Pages/Projects';
import Education from './Components/Pages/Education';
import Services from './Components/Pages/Services';

const App = () => {
  return (
    <div>
            <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/portfolio/" element={<Home/>} />
          <Route exact path="/services" element={<Services/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/education" element={<Education/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <Gotop/>
    </div>
  )
}

export default App

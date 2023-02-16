import React, { useContext } from 'react';
import './App.scss';
import Footer from './component/footer';
import Navigation from './component/navigation';
import { ThemeContext } from './component/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import Homepage from './component/Homepage';
import Contact from './component/Contact';
import Error from './component/error';
import Watch from './component/Watch';
import About from './component/about';

function App() {
  const { dark } = useContext(ThemeContext)
  
  return (
    <div className="App" id={dark ? "active-theme" : "inactive-theme"}>
      <Navigation />
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/watch/:id" element={<Watch />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;

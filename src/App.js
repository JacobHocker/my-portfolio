import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import NavBar from './components/navbar/NavBar';
import Skills from './components/skills/Skills';
import AboutMe from './components/aboutMe/AboutMe';
import EntHub from './components/entHub/EntHub';
import OwStatLab from './components/owStatLab/OwStatLab';

function App() {
  const [isDark, setIsDark] = useState(false)
  
  useEffect(() => {
    setIsDark(JSON.parse(window.localStorage.getItem('isDark')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('isDark', isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);
  
  return (
    <div className={isDark === true ? 'app-dark' : 'app-light'}>
      <NavBar onToggleDarkMode={toggleDarkMode} isDark={isDark}/>
      <Routes>
        <Route path="/" element={<Home isDark={isDark}/>} />
        <Route path='skills' element={<Skills isDark={isDark} />} />
        <Route path='about-me' element={<AboutMe isDark={isDark} />} />
        <Route path='entertainment-hub' element={<EntHub isDark={isDark} />} />
        <Route path='overstat-lab' element={<OwStatLab isDark={isDark} />} />
      </Routes>
      <Footer isDark={isDark} />
    </div>
  );
}

export default App;

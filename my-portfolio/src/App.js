import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'



function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact />}/>
        
        
      </Routes>
    </div>
  );
}

export default App;

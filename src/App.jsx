import React from 'react';
import './App.css';

import Main from './Pages/Main';
import About from './Pages/About';
import Projects from'./Pages/Projects';
import Nav from './Components/Nav';
import Contact1 from './Pages/Contact1';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Main />
        <About />
        <Projects /> 
        <Contact1 />
        <Footer />
      </main>

      <Nav />
    </div>
  );
}

export default App;
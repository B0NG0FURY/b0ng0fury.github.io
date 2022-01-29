import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const [active, setActive] = useState("Welcome");
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="page">
      <Nav setActive={setActive} />
      <section className="main">
        {active === "Welcome" && <Welcome />}
        {active === "About" && <About />}
      </section>
    </div>
  );
}

export default App;

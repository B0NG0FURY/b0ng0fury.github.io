import logo from './logo.svg';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Welcome from './components/Welcome';
import Nav from './components/Nav';
import AboutContainer from './containers/AboutContainer';
import Portfolio from './components/Portfolio';
import Cv from './components/Cv';

function App() {
  const [active, setActive] = useState("Welcome");
  return (
    <div className="page">
      <Nav setActive={setActive} active={active} />
      <section className="main">
        {active === "Welcome" && <Welcome />}
        {active === "About" && <AboutContainer />}
        {active === "Portfolio" && <Portfolio />}
        {active === "CV" && <Cv />}
      </section>
    </div>
  );
}

export default App;

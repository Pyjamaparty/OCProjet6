import logo from './resources/images/LOGO.png';
import './App.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';

const Home = () => <div>Accueil</div>;
const About = () => <div>À Propos</div>;

function App() {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <nav>
        <ul class="nav-list">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Routes>
    </header>
  );
}

export default App;

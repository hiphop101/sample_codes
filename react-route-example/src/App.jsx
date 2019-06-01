import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/public/Home';
import UseCases from './components/public/UseCases';
import About from './components/public/About';
import Pricing from './components/public/Pricing';
import Register from './components/public/Register';

import Navbar from './components/public/CustomNavbar';
import Footer from './components/public/Footer';

import Team from './components/public/Team';
import Term from './components/public/Term';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/usecases" component={UseCases} />
        <Route path="/about" component={About} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/register" component={Register} />
        <Route path="/team" component={Team} />
        <Route path="/term" component={Term} />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

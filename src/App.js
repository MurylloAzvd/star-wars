import React from 'react';
import Nav from './Nav'
import Routes from './routes';
import './App.css';
import Masthead from './Masthead';
import Person from './Person';
import Ships from './Ships'
import About from './About'

function App() {


  return (
    <div>
      <Nav />
      <Masthead />
      <Person />
      <Ships />
      <About />
    </div>
  );
}

export default App;

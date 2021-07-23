import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactState from './context/contact/ContactState';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import './App.css';

function App() {
  return (
    <ContactState>
      <BrowserRouter>
        <div className='App'>
          <Navbar title='Contact Keeper' />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </ContactState>
  );
}

export default App;

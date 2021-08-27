import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Footer from './components/inc/Footer';
function App() {
  return (
    <Router>

    
    <div>
      <Navbar/>
      <Switch>

      
      <Route exact path="/">

            <Home/>
      </Route>
      
      <Route path="/Contact">

      <Contact/>

      </Route>
      <Route path="/About">

      <About/>
      
      </Route>
     
    </Switch>
    <Footer/>
    </div>
    </Router>
    
    
  );
}

export default App;

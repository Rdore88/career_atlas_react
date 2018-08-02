import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import AboutUs from './components/aboutus/AboutUs';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about-us' component={AboutUs} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;

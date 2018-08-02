import React, { Component } from 'react';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NavBar />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;

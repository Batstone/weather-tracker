import React from 'react';
import './App.css';
import Header from './Header.js'
import Search from './Search.js';
import Footer from './Footer.js'

const App = () => {

  return (
    <div className="main-container">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;

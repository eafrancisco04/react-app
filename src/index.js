import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Bio from './components/Bio'
import Portfolio from './components/Portfolio'
import "./css/style.css"

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Bio></Bio>
    <Portfolio></Portfolio>
    <Portfolio></Portfolio>
    <Portfolio></Portfolio>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

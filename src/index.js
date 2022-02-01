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
    <section class="portfolio">
      <Portfolio title="Title1" descr="Lorem ipsum something"></Portfolio>
      <Portfolio title="Title2" descr="Lorem ipsum something"></Portfolio>
      <Portfolio title="Title3" descr="Lorem ipsum something"></Portfolio>
    </section>
    <Footer></Footer>
  </React.StrictMode>,
  document.getElementById('root')
);

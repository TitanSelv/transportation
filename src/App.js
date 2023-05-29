import React from 'react';
import "./styles/style.css";
import "./styles/reset.css";
import "./styles/fonts.css";
import Header from './components/header/Header';
import Whyblock from './components/whyblock/Whyblock';
import Transport from './components/transport/Transport';
import SliderBlock from './components/sliderblock/sliderblock';
import Contacts from './components/contacts/contacts';
import Services from './components/services/Services';

import Footer from './components/footer/Footer';
import Modal from "./Modal/Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Services />
        <Whyblock />
        <Transport />
        <SliderBlock />
        <Contacts />
        <Footer />
      </main>
    </div>
  );
}

export default App;

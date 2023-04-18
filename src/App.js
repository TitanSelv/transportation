import React from 'react';
import "./styles/style.css";
import "./styles/reset.css";
import "./styles/fonts.css";
import Header from './components/header/Header';
import Whyblock from './components/whyblock/Whyblock';
import Transport from './components/transport/Transport';
import SliderBlock from './components/sliderblock/sliderblock';



function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Whyblock />
        <Transport />
        <SliderBlock />
      </main>
    </div>
  );
}

export default App;

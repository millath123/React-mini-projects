import React from 'react';
import Carousel from './Carousel';
import './App.css';

function App() {
  const srcLinks = [
    'https://via.placeholder.com/800x300/FF0000/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/800x300/0000FF/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/800x300/00FF00/FFFFFF?text=Slide+3',
  ];

  return (
    <div className="App">
      <h1>React Carousel</h1>
      <Carousel srcLinks={srcLinks} />
    </div>
  );
}

export default App;


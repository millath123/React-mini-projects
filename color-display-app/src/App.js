import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('');

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Display App</h1>
        <input 
          type="text" 
          placeholder="Enter a color" 
          value={color}
          onChange={handleChange} 
        />
        <div 
          className="color-display" 
          style={{ backgroundColor: color, width: '100px', height: '100px', marginTop: '20px' }}
        ></div>
      </header>
    </div>
  );
}

export default App;

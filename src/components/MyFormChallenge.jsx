// MyFormChallenge.jsx
import React, { useState } from 'react';
import BoxColor from './BoxColor';

const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

const MyForm = () => {
  const [inputValue, setInputValue] = useState('color');

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  return (
    <>
    <section>
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Choose a color"
        value={inputValue}
        
      />
      <div className="container">
        {colors.map((color, index) => (
          <BoxColor key={index} color={color} inputValue={inputValue} />
        ))}
      </div>
    </section>
    </>
  );
};

export default MyForm;

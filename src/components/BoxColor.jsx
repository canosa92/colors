
import { useRef, useEffect } from 'react';

const BoxColor = ({ color, inputValue }) => {
  const boxRef = useRef(null);
  let texto = `Esto no es el ${inputValue}`;

  useEffect(() => {

    if (color === inputValue) {
      boxRef.current.style.backgroundColor = color;
      boxRef.current.textContent = `Esto sí es el ${inputValue}`;
    } else {
      boxRef.current.style.backgroundColor = 'none';
      boxRef.current.textContent = texto;
    }
  }, [color,inputValue]);

  return (
    <>
    <div className={`box ${color}`} ref={boxRef}></div>
    </>
  );
};

export default BoxColor;

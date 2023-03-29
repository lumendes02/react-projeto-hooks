import P from 'prop-types';
import './App.css';
import React, { useState, useEffect, useCallback } from 'react';

const Button = React.memo(({incrementButton}) => {
  console.log('filho')
  return <button onClick={() => incrementButton(10)}>+</button>
});

Button.propTypes = {
  incrementButton: P.func
}


function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('pai')

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter}/>
    </div>
  );
}

export default App;

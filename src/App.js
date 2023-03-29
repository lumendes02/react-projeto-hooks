
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // componentDidUpdate
  useEffect(() => {
    console.log('componentDidUpdate');
  });

   // componentDidMount
  useEffect(() => {
    console.log('componentDidMount');
  }, []);

  // com dependencia 
  useEffect(() => {
    console.log('C1', counter, 'C2', counter2);
  }, [counter, counter2]);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <h1>Contador2: {counter2}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter2(counter2 + 1)}>+ 2</button>
    </div>
  );
}

export default App;

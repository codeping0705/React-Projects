import { useEffect, useMemo, useState } from 'react';
import './App.css';

const App = () => {

  const [height, setHeight] = useState(100);
  const [weight, setWeight] = useState(30);
  const [result, setResult] = useState('');

  function onWeightChange(event) {
    setWeight(event.target.value);
  };

  function onHeightChange(event) {
    setHeight(event.target.value);
  };

  const output = useMemo(() => {
    const calHeight = height / 100;
    return (weight / (calHeight * calHeight)).toFixed(2);
  }, [height, weight]);

  useEffect(() => {
    output1(output);
  }, [output]);

  function output1(output) {
    if (output < 18.5) {
      setResult('Underweight');
    } else if (output >= 18.5 && output < 24.9) {
      setResult('Normal Weight');
    } else if (output >= 25 && output < 29.9) {
      setResult('Overweight');
    } else {
      setResult('Obese');
    }
  };

  return (
    <main>
      <div>
        <h1>BMI Calculator</h1>
        <div className='out1'>
          <p className="slider-output">Weight :{weight} Kg</p>
          <input type="range" className="slider-input"
            min="30"
            step="1"
            max="170"
            onChange={onWeightChange} />
        </div>
        <div className='out2'>
          <p className="slider-output1">Height : {height} cm</p>
          <input type="range" className="slider-input"
            min="80"
            step="1"
            max="220"
            onChange={onHeightChange} />
        </div>
        <div className='output-section'>
          <p>Bmi calculated :</p>
          <button id="btn">{output}</button>
          <br />
          <p className={`output1 ${result === 'Normal Weight' ? 'normal-weight' : ''}`}>{result}</p>
        </div>
      </div>
    </main>
  );
}

export default App;

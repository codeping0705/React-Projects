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
          <p className="slider-output">Weight: {weight} Kg</p>
          <input type="range" className="slider-input"
            min="30"
            step="1"
            max="170"
            onChange={onWeightChange} />
        </div>
        <div className='out2'>
          <p className="slider-output">Height: {height} cm</p>
          <input type="range" className="slider-input"
            min="80"
            step="1"
            max="220"
            onChange={onHeightChange} />
        </div>
        <div className='output-section'>
          <p>BMI calculated: <span>{output}</span></p>
          <p className={`output1 ${result === 'Normal Weight' ? 'normal-weight' : ''}`}>{result}</p>
        </div>
        <div className="bmi">
          <h2>BMI Calculation and Categories</h2>
          <p>Body Mass Index (BMI) is calculated using the formula:</p>
          <p>BMI = weight (kg) / (height (m) * height (m))</p>
          <p>For adults over the age of 20, BMI values are grouped into the following weight status categories:</p>
          <ul>
            <li>Below 18.5: Underweight</li>
            <li>18.5–24.9: Normal weight</li>
            <li>25–29.9: Overweight</li>
            <li>30 and above: Obese</li>
          </ul>
          <p>For children, BMI calculations are compared to age and gender-specific percentiles to determine weight status.</p>
        </div>
      </div>
    </main>
  );
}

export default App;

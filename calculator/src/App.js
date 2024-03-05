import React, { useState } from 'react';
import './App.css';
import './input.css';

function App() {
  const [input, setInput] = useState();

  const calculateResult = (input) => {
    try {
      const operators = ['+', '-', '*', '/'];
      let operator = '';

      for (let i = 0; i < input.length; i++) {
        if (operators.includes(input[i])) {
          operator = input[i];
          break;
        }
      }

      if (!operator) {
        setInput(parseFloat(input).toString());
        return;
      }

      const [operand1, operand2] = input.split(operator).map(parseFloat);

      let result;

      switch (operator) {
        case '+':
          result = operand1 + operand2;
          break;
        case '-':
          result = operand1 - operand2;
          break;
        case '*':
          result = operand1 * operand2;
          break;
        case '%':
          result = operand1 % operand2;
          break;
        case '/':
          if (operand2 === 0) {
            throw new Error('Division by zero');
          }
          result = operand1 / operand2;
          break;
        default:
          throw new Error('Invalid operator');
      }

      setInput(result.toString());

    } catch (error) {
      setInput('Error');
    }
  }



  const handleClicked = (value) => {
    if (value === 'C') {
      setInput('');
    } else if (value === '<') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      calculateResult(input);
    } else {
      setInput((preValue) => preValue + value)
    }
  }
  return (
    <div className=" container ">
      <div className="cal mb-3 border-2 rounded border-black">
        <h1 className="text-3xl" id="input">
          {input}
        </h1>
      </div>
      <div className='p-3 border-2 rounded border-black'>
        <div className='ms-1 mb-1'>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('C') }} style={{ backgroundColor: '#444' }}>C</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('<') }} style={{ backgroundColor: '#444' }}>&lt;</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('%') }} style={{ backgroundColor: '#444' }}>%</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('/') }} style={{ backgroundColor: '#444' }}>/</button>
        </div>
        <div className='ms-1 mb-1'>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('7') }} style={{ backgroundColor: '#777' }}>7</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('8') }} style={{ backgroundColor: '#777' }}>8</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('9') }} style={{ backgroundColor: '#777' }}>9</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('*') }} style={{ backgroundColor: '#444' }}>*</button>
        </div>
        <div className='ms-1 mb-1'>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('4') }} style={{ backgroundColor: '#777' }}>4</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('5') }} style={{ backgroundColor: '#777' }}>5</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('6') }} style={{ backgroundColor: '#777' }}>6</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('-') }} style={{ backgroundColor: '#444' }}>-</button>
        </div>
        <div className='ms-1 mb-1'>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('1') }} style={{ backgroundColor: '#777' }}>1</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('2') }} style={{ backgroundColor: '#777' }}>2</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('3') }} style={{ backgroundColor: '#777' }}>3</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('+') }} style={{ backgroundColor: '#444' }}>+</button>
        </div>
        <div className='ms-1 '>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('0') }} style={{ backgroundColor: '#777' }}>0</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('00') }} style={{ backgroundColor: '#777' }}>00</button>
          <button className="btn mr-2  border rounded border-black" onClick={() => { handleClicked('.') }} style={{ backgroundColor: '#444' }}>.</button>
          <button className="equal btn mr-2  border rounded border-black" onClick={() => { handleClicked('=') }} style={{ backgroundColor: '#FFA447' }}>=</button>
        </div>
      </div>
    </div >
  );
}

export default App;

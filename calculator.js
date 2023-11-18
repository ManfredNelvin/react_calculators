import React, { useState } from 'react';

const Calculator = () => {
  // State variables to store input values, operator, and result
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change for both numbers
  const handleNumChange = (event, numType) => {
    const value = event.target.value;

    // Check for valid input (numbers, positive or negative)
    if (!/^-?\d+(\.\d+)?$/.test(value)) {
      setErrorMessage('Invalid number');
      return;
    }

    // Update the corresponding state variable
    if (numType === 'num1') {
      setNum1(value);
    } else {
      setNum2(value);
    }

    // Clear error message on valid input
    setErrorMessage('');
  };

  // Handle operator selection
  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  // Perform the calculation based on the selected operator
  const performCalculation = () => {
    if (!num1 || !num2) {
      setErrorMessage('Please enter both numbers');
      return;
    }

    let calcResult;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    switch (operator) {
      case '+':
        calcResult = n1 + n2;
        break;
      case '-':
        calcResult = n1 - n2;
        break;
      case '*':
        calcResult = n1 * n2;
        break;
      case '/':
        calcResult = n1 / n2;
        break;
      default:
        setErrorMessage('Invalid operation');
        return;
    }

    // Update the result state with the calculated value
    setResult(calcResult);
  };

  // Clear all input fields and error message
  const clearAll = () => {
    setNum1('');
    setNum2('');
    setOperator('');
    setResult(null);
    setErrorMessage('');
  };

  return (
    <div className="calculator">
      {/* Input fields for numbers */}
      <div className="input-fields">
        <input
          type="text"
          placeholder="Enter first number"
          value={num1}
          onChange={(event) => handleNumChange(event, 'num1')}
        />
        <input
          type="text"
          placeholder="Enter second number"
          value={num2}
          onChange={(event) => handleNumChange(event, 'num2')}
        />
      </div>

      {/* Operator buttons */}
      <div className="operator-buttons">
        <button
 
onClick={() => handleOperatorClick('+')}>+</button>

        
<button
 
onClick={() => handleOperatorClick('-')}>-</button>

        
<button
 
onClick={() => handleOperatorClick('*')}>*</button>

        
<button
 
onClick={() => handleOperatorClick('/')}>/</button>
      </div>

      {/* Calculate button */}
      <button onClick={performCalculation}>Calculate</button>

      {/* Error message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Result display */}
      {result && <p className="result">Result: {result}</p>}

      {/* Clear all button */}
      <button onClick={clearAll}>Clear All</button>
    </div>
  );
};

export default Calculator;

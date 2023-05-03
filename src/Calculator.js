import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperatorChange = (e) => {
    setOperator(e.target.value);
  };

  const calculate = () => {
    switch (operator) {
      case "+":
        setResult(parseFloat(num1) + parseFloat(num2));
        break;
      case "-":
        setResult(parseFloat(num1) - parseFloat(num2));
        break;
      case "*":
        setResult(parseFloat(num1) * parseFloat(num2));
        break;
      case "/":
        setResult(parseFloat(num1) / parseFloat(num2));
        break;
      default:
        setResult(0);
        break;
    }
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <select value={operator} onChange={handleOperatorChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
};

export default Calculator;

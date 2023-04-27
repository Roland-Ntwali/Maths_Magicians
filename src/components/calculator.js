import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './styles.css';

function Calculator() {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleOperations = (e) => {
    setState(calculate(state, e.target.textContent));
  };

  const { total, next, operation } = state;

  return (
    <div className="calculus">
      <div className="display">
        {next || total || operation || 0 }
      </div>
      <div className="All">
        <div className="row-1">
          <button type="button" onClick={handleOperations}>AC</button>
          <button type="button" onClick={handleOperations}>+/-</button>
          <button type="button" onClick={handleOperations}>%</button>
          <button type="button" className="orange" onClick={handleOperations}> ÷</button>
        </div>
        <div className="row-2">
          <button type="button" onClick={handleOperations}>7</button>
          <button type="button" onClick={handleOperations}>8</button>
          <button type="button" onClick={handleOperations}>9</button>
          <button type="button" className="orange" onClick={handleOperations}>x</button>
        </div>
        <div className="row-3">
          <button type="button" onClick={handleOperations}>4</button>
          <button type="button" onClick={handleOperations}>5</button>
          <button type="button" onClick={handleOperations}>6</button>
          <button type="button" className="orange" onClick={handleOperations}>-</button>
        </div>
        <div className="row-4">
          <button type="button" onClick={handleOperations}>1</button>
          <button type="button" onClick={handleOperations}>2</button>
          <button type="button" onClick={handleOperations}>3</button>
          <button type="button" className="orange" onClick={handleOperations}>+</button>
        </div>
        <div className="point">
          <button type="button" className="zero" onClick={handleOperations}>0</button>
          <button type="button" className="dot" onClick={handleOperations}>.</button>
          <button type="button" className="orange" onClick={handleOperations}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;

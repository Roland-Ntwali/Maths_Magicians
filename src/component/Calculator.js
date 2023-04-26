import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.cal = [];
  }

  render() {
    return (
      <div className="calculus">
        <div className="display">
          <span>0</span>
        </div>
        <div className="All">
          <div className="row-1">
            <button type="button">AC</button>
            <button type="button">+/-</button>
            <button type="button">%</button>
            <button type="button" className="orange"> ÷</button>
          </div>
          <div className="row-2">
            <button type="button">7</button>
            <button type="button">8</button>
            <button type="button">9</button>
            <button type="button" className="orange">x</button>
          </div>
          <div className="row-3">
            <button type="button">4</button>
            <button type="button">5</button>
            <button type="button">6</button>
            <button type="button" className="orange">-</button>
          </div>
          <div className="row-4">
            <button type="button">1</button>
            <button type="button">2</button>
            <button type="button">3</button>
            <button type="button" className="orange">+</button>
          </div>
          <div className="point">
            <button type="button" className="zero">0</button>
            <button type="button" className="dot">.</button>
            <button type="button" className="orange">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;

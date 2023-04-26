import React from 'react';

import Calculator from './component/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.cal = [];
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}
export default App;

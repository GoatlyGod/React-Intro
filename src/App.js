import React from 'react';
import Button from './components/Button'
import Jumbotron from './components/Jumbotron'
import Counter from './components/Counter'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <Button title=""/>
            <Button title=""/>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Counter />
          </div>

          <div className="col">
          <Counter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

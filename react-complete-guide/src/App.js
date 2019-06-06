import React from 'react';
import './App.css';

function App() {
  //jsx
  return (
    <div className="App">
      <h1>Hi, I'm a new react developer</h1>
    </div>
  );
  //First -> element to render to the DOM
  //Second -> Configuration (javascript object)
  //Third -> Nested inside
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));
}

export default App;

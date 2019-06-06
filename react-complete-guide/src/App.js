import React from 'react';
import './App.css';
//Import with Upper case and same name of the file
//In jsx all element with lowercase are reserver for html elements
import Person from './Person/Person'

//REACT is all about components
function App() {
  //jsx - > Write html code in js files.
  //Some restriction like className instead of class, given that class is js reserved word.
  //JSC expression can olny have one root element
  return (
    //Use a component inside
    <div className="App">
      <h1>Hi, I'm a new react developer</h1>
      <p>This is working</p>
      <Person name="Max" age="30"/>
      <Person name="Jose" age="25">My hobbies are: soccer </Person>
      <Person name="Juan" age="21"/>
    </div>
    //this not
    //<p>This is working</p>
  );
  //First -> element to render to the DOM
  //Second -> Configuration (javascript object)
  //Third -> Nested inside
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));
}

export default App;

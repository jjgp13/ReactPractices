import React, { Component } from 'react';
import './App.css';
//Import with Upper case and same name of the file
//In jsx all element with lowercase are reserver for html elements
import Person from './Person/Person'

//REACT is all about components
class App extends Component {
  state = {
    persons: [
      {id: 'asd',  name: 'Max', age: 28 },
      {id: 'ecs',  name: 'Jose', age: 29 },
      {id: 'wqsaa', name: 'Juan', age: 26 }
    ],

    showPersons: false
  }
  //Event handler
  //Call inside JSX without (), if so the method will be call when app starts.
  //Passing parameters inside a function, use bind in JSX
  // SwitchNameHandler = (newName) => {
  //   //console.log('Clicked');
  //   //Don't do this -> this.state.persons[0].name = 'Jose Galvez';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Jose Galvez', age: 29 },
  //       { name: 'Juan Percastegui', age: 26 }
  //     ]
  //   })
  // }

  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) =>{
    //Use slice to create a copy from state.persons
    //const persons = this.state.persons.slice();
    //Using spread operator of EC6
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
          <div>
            {this.state.persons.map((person, index) => {
              return <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name} 
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)} />
            })}
          </div>
      );
    }

    //jsx - > Write html code in js files.
    //Some restriction like className instead of class, given that class is js reserved word.
    //JSC expression can olny have one root element
    return (
      //Use a component inside
      //Ternary operator 
      <div className="App">
        <h1>Hi, I'm a new react developer</h1>
        <p>This is working</p>
        
        <button 
          onClick={this.tooglePersonsHandler}
          style={style}>
            Toggle Persons
        </button>
        
        {persons}
      </div>
      //this not
      //<p>This is working</p>
    );
  }
  
  //First -> element to render to the DOM
  //Second -> Configuration (javascript object)
  //Third -> Nested inside
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'React App'));
}

export default App;

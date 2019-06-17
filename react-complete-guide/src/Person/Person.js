import React from 'react'
import { prototype } from 'module';

//A component is just function which return a jsx
//Function name lowercase

//Two forms of create a react component
/*
 //Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => 
 const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional)

 //class-based components (also referred to as "containers", "smart" or "stateful" components) => 
 class Cmp extends Component { render () { return <div>some JSX</div> } } 
*/

// To use dinamic content inside jsx {dinamic content}
// Props are the argument passing throw the function. When the object is render in App.js

//The children propertie is use to go inside the component you want to render.
const person = (props) => {
    return (
        <div>
            <p>I'm  {props.name} and I have {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

//Export this component to use in main App.js
export default person;
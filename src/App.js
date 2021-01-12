import React, {Component} from 'react';
import './App.css';
import BasicInfo from './BasicInfo/BasicInfo';

class App extends Component {
  constructor (props) {
    super();
    this.state = {
      person: [
        {name: 'John', number: 9192345678, dOB: 'March 10, 1999', position: 'Coding Fellow'},
        {name: 'Jill', number: 9193456789, dOB: 'March 11, 1999', position: 'Coding Fellow'},
        {name: 'James', number: 9194567890, dOB: 'March 12, 1999', position: 'Coding Fellow'}
      ]
    }
  }

  render () {
  return (
    <div className="App">
      <h1>Week One Guided Inquiry</h1>
      <h2>Personal info</h2>
      <p>Name: Jackie</p>
      <p>Number: 9191234567</p>
      <p>DOB: March 9, 1999</p>
      <p>Position: Coding Fellow</p>
      
      {this.state.person.map(person => {
        return <BasicInfo 
        name={person.name}
        number={person.number}
        dOB={person.dOB}
        position={person.position}
        />
      })}
      
    </div>
  );
}
}

export default App;

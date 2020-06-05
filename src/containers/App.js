import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';

export default class App extends Component{

  state = {
    persons: [
      {id:'p1', name:'fatmi', age: '27'},
      {id:'p2', name:'mouloud', age: '23'},
      {id:'p3', name:'sany', age: '21'}
    ],
    showPerson: false
  }


  nameChangeHandler = (event,id) => {

    //  const personIndex = this.state.persons.findIndex(p => {return p.id === id; });

     const personIndex = this.state.persons.findIndex(p => {
      
         return p.id === id
      });

     const person = {...this.state.persons[personIndex]};
     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;

     this.setState({persons : persons})

  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons];
          persons.splice(index,1);
    this.setState({persons : persons});
  }
  togglePersonHandler = () => {
    const doesshow = this.state.showPerson;
    this.setState({showPerson : !doesshow})
  }

  render(){
      return (
        <div className="App">
          <h1>hii React </h1>
          <Persons
            persons = {this.state.persons}
            changed = {this.nameChangeHandler}
            clicked = {this.deletePersonHandler}
          />
        </div>
      );
  }

}





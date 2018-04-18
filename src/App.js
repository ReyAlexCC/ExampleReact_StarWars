import React, { Component } from 'react';
import logo from './logo.svg';
import List from './List';
import './App.css';
import Axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      people: [],
    }

    this.getPeople = this.getPeople.bind(this);
  }

  getPeople(){
    return Axios.get("https://swapi.co/api/people")
    .then((response) => {
      console.log(response.data.results);
      this.setState({people: response.data.results})
    }) 
  }

  componentDidMount(){
    this.getPeople()
  }

  render() {
    const {people} = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React con una Api de Start Wars.</h2>
        </div>
        <div>
          <List people = {people} />
        </div>

      </div> 
    );
  }
}

export default App;

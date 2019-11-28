import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
componentDidMount(){
  fetch('/api/movies')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}

  render(){
    return (
      <div className="App">
        Hello world
      </div>
    );
  }
}

export default App;

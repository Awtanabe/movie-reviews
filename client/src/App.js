import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
  }
  componentDidMount(){
    fetch('/api/movies')
      .then(response => response.json())
      .then(json => this.setState({movies: json}))
      .catch(error => console.log(error))
  }

  render(){
    return (
      <div className="App">
        {this.state.movies.map(moviee => <h1> {moviee.title}</h1>)}
      </div>
    );
  }
}

export default App;

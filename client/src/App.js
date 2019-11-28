import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movies: []
    }
    this.requestMethod = this.requestMethod.bind(this)
  }
  componentDidMount(){
    fetch('/api/movies')
      .then(response => response.json())
      .then(json => this.setState({movies: json}))
      .catch(error => console.log(error))
  }

  requestMethod(){
    var url = '/api/reviews'
    var data = {yahoo: "world"}
    debugger
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(res => console.log(res))
  }

  render(){
    return (
      <div className="App">
        {this.state.movies.map(moviee => <h1> {moviee.title}</h1>)}
        <button onClick={this.requestMethod}>クリック</button>
      </div>
    );
  }
}

export default App;

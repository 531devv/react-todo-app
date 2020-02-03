import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <header>
        <h1>TODO App</h1>
      </header>
      <form id="todo-form">
        <input type="text" placeholder="Text.." />
      </form>
    </div>
    );
  }
}

export default App;

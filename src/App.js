import React, { Component } from 'react';
import './App.css';
import ListItems from './ListItems';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem:{
          text:'',
          key: ''
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  render() {
    return (
    <div className="App">
      <header>
        <h1>TODO App</h1>
      </header>
      <ListItems items={this.state.items} deleteItem={this.deleteItem} />
      <form id="todo-form" onSubmit={this.addItem}>
        <input type="text" placeholder="Text.." value={this.state.currentItem.text} onChange={this.handleInput}/>
      </form>
    </div>
    );
  }
}

export default App;

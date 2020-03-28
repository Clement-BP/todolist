import React from 'react';

export class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput:'',
        items: []
      };
    }
    
    onChange(event) {
      this.setState({userInput: event.target.value});
    }

    onClick(event) {
      event.preventDefault();
      this.setState({
        userInput:'',
        items: [...this.state.items, this.state.userInput]
      });
    }

    liste() {
      return (
        this.state.items.map( ???? )
      )
    }

    render() {
      return (
        <div className="todoList">
            <h1 className="App-header">Ma To Do List</h1>          
            <form>
              <input 
                onChange={this.onChange.bind(this)}
                value={this.state.userInput} 
                type="text" 
                placeholder="Compléter la ToDoList">
              </input>
              <button 
                onClick={this.onClick.bind(this)} 
                type="submit">Envoyer</button>
            </form>
        </div>
      );
    }
  }

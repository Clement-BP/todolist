import React from 'react';

export class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput:'',
        items: []
      };
    }
    
    // Pour gérer la saisie dans la barre de saisie
    onChange(event) {
      this.setState({userInput: event.target.value});
    }


    // Pour gérer le clique sur le bouton
    onClick(event) {
      event.preventDefault();
      this.setState({
        userInput:'',
        items: [...this.state.items, this.state.userInput]
      });
    }

    // Pour afficher les résultats. Je pense qu'il faut faire avec "map" mais je ne s
    liste() {
      return (
        <div>
          this.state.items.map( ???? )
          <button>X</button>
          </div>      
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

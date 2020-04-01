import React from 'react';

export class Formulaire extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput:'',
        items: [],
        isChecked: { checked: false }
      };
      this.onChange = this.onChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
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

     // Pour retirer un item
     removeItem(event) {
      event.preventDefault();
      const itemsbis = this.state.items;
      const index = itemsbis.indexOf(event.target.value);
      itemsbis.splice(index, 1);
      this.setState({
        items: itemsbis
      });
    }

    // Pour la checkbox
    handleCheckboxChange(event) {
      this.setState({ isChecked: event.target.checked })
    }

    // Pour afficher les résultats.
    liste() {
      return this.state.items.map((item) => {
        return (
        <div key={item} style={{backgroundColor: !this.state.isChecked ? "white" : "green"}}>
          <input 
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}/>  
          {item}
          <button onClick={this.removeItem}>X</button>
          </div>      
        );
      });
    }

    render() {
      return (
        <div className="todoList">
            <h1 className="App-header">Ma To Do List</h1>          
            <form>
              <input 
                onChange={this.onChange}
                value={this.state.userInput} 
                type="text" 
                placeholder="Compléter la ToDoList">
              </input>
              <button 
                onClick={this.onClick} 
                type="submit">Envoyer</button>
            </form>
            <div>{this.liste()}</div>
        </div>
      );
    }
  }


  
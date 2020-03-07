import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  // when ever the page render for the first time whath evre inside will run
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = e => {
    this.setState({ searchField: e.target.value }, () =>
      console.log(this.state)
    );
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonstors = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Robo Friends</h1>
        <SearchBox className = 'search-box'
          handleChange={this.handleChange}
          placeholder="search mosters"
        />

        <CardList monsters={filteredMonstors}></CardList>
      </div>
    );
  }
}

export default App;

import { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { kittens } from "./kittens.js";

class App extends Component {
  constructor() {
    super();

    this.state = {
      kittens: kittens,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredKittens = this.state.kittens.filter((kitten) => {
      return kitten.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div>
        <h1>KittenFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList kittens={filteredKittens} />
      </div>
    );
  }
}

export default App;

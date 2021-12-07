import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
  }

  search() {
    this.props.onSearch(this.state.userInput);
  }

  handleSearchInput(event) {
    this.setState({ userInput: event.target.value });
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Search by Song, Artist or Album" />
        <button className="SearchButton">Ayyyy</button>
      </div>
    );
  }
}

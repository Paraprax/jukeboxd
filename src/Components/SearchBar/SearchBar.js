import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.search = this.search.bind(this);
  }

  handleSearchInput(event) {
    this.setState({ userInput: event.target.value });
  }

  search() {
    this.props.onSearch(this.state.userInput);
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Search by Song, Artist or Album" onChange={this.handleSearchInput} />
        <button className="SearchButton" onClick={this.search}>
          Ayyyy
        </button>
      </div>
    );
  }
}

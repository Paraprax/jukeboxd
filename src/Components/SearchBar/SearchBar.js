import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.state = {
      userInput: "",
    };
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

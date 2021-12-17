import React from "react";
import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.search = this.search.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSearchInput(event) {
    this.setState({ searchTerm: event.target.value });
  }

  search() {
    console.log("clicked");
    this.props.onSearch(this.state.searchTerm);
  }

  handleEnter(event) {
    if (event && event.key === "Enter") {
      event.preventDefault();
      console.log("Enter pressed");
      this.search();
    }
  }

  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Search by Song, Artist or Album" onChange={this.handleSearchInput} onKeyPress={this.handleEnter} />
        <button className="SearchButton" onClick={this.search}>
          Ayyyy
        </button>
      </div>
    );
  }
}

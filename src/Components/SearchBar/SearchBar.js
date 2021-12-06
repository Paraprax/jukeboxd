import React from "react";

export class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <input placeholder="Search by Song, Artist or Album" />
        <button className="SearchButton">Ayyyy</button>
      </div>
    );
  }
}

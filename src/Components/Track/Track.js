import React from "react";

export class Track extends React.Component {
  renderAction() {
    let isRemoval;
    if (isRemoval) {
      return <button className="Track-action">-</button>;
    } else {
      return <button className="Track-action">+</button>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          {/* <h3><!-- track name here --></h3> */}
          {/* <p><!-- track artist here--> | <!-- track album here --></p> */}
        </div>
        {/* <button className="Track-action"><!-- + or - here --></button> */}
      </div>
    );
  }
}

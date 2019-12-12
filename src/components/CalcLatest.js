import React from "react";

let arr = [];

export default class CalcLatest extends React.Component {
  showOrNot = () => {
    if (this.props.screenShow) {
      arr.push(this.props.valueInfo);
    }
  };
  render() {
    this.showOrNot();
    return (
      <div className="latest">
        {arr.map((info, index) => {
          return <p key={index}>{info}</p>;
        })}
      </div>
    );
  }
}

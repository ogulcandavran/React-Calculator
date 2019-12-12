import React from "react";

export default function CalcButtons(props) {
  return (
    <div className="buttons-grid">
      <button value="(" onClick={e => props.handleNumClick(e.target.value)}>
        (
      </button>
      <button value=")" onClick={e => props.handleNumClick(e.target.value)}>
        )
      </button>
      <button
        value=" % "
        onClick={e => props.handleOperatorClick(e.target.value)}
      >
        %
      </button>
      <button
        value="AC"
        onClick={e => props.handleAcClick(e.target.value)}
        className="ac"
      >
        AC
      </button>
      <button value="7" onClick={e => props.handleNumClick(e.target.value)}>
        7
      </button>
      <button value="8" onClick={e => props.handleNumClick(e.target.value)}>
        8
      </button>
      <button value="9" onClick={e => props.handleNumClick(e.target.value)}>
        9
      </button>
      <button
        value=" / "
        onClick={e => props.handleOperatorClick(e.target.value)}
      >
        ÷
      </button>
      <button value="4" onClick={e => props.handleNumClick(e.target.value)}>
        4
      </button>
      <button value="5" onClick={e => props.handleNumClick(e.target.value)}>
        5
      </button>
      <button value="6" onClick={e => props.handleNumClick(e.target.value)}>
        6
      </button>
      <button
        value=" * "
        onClick={e => props.handleOperatorClick(e.target.value)}
      >
        x
      </button>
      <button value="1" onClick={e => props.handleNumClick(e.target.value)}>
        1
      </button>
      <button value="2" onClick={e => props.handleNumClick(e.target.value)}>
        2
      </button>
      <button value="3" onClick={e => props.handleNumClick(e.target.value)}>
        3
      </button>
      <button
        value=" - "
        onClick={e => props.handleOperatorClick(e.target.value)}
      >
        -
      </button>
      <button value="0" onClick={e => props.handleNumClick(e.target.value)}>
        0
      </button>
      <button
        value="."
        onClick={e => props.handleOperatorClick(e.target.value)}
      >
        .
      </button>
      <button value=" = " onClick={e => props.handleEqualClick(e.target.value)}>
        =
      </button>
      <button
        value=" + "
        onClick={e => props.handleOperatorClick(e.target.value)}
      >
        +
      </button>
    </div>
  );
}

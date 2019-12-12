import React, { Component } from "react";
import CalcButtons from "./CalcButtons";
import CalcScreen from "./CalcScreen";
import CalcLatest from "./CalcLatest";

class App extends Component {
  state = {
    previousValue: "",
    value: null,
    isOperatorAllowed: false,
    afterEqualControl: false
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = e => {
    let { key } = e;
    e.preventDefault();
    if (/\d/.test(key) && key.length === 1) {
      this.handleNumClick(key);
    }
    if (key === '+' || key === '-'|| key === '*' || key === '/' || key === '.') {
      this.handleOperatorClick(key);
    }
    if (key === 'Enter') {
      this.handleEqualClick();
    }

    if (key === 'Backspace') {
      this.handleBackspace();
    }
  }

  handleNumClick = e => {
    if (this.state.afterEqualControl) {
      this.setState({
        previousValue: e,
        isOperatorAllowed: true,
        afterEqualControl: false
      });
    } else {
      this.setState({
        previousValue: this.state.previousValue + e,
        value: this.state.previousValue + e,
        isOperatorAllowed: true
      });
    }
  };

  handleOperatorClick = e => {
    if (this.state.isOperatorAllowed) {
      this.setState({
        previousValue: this.state.previousValue + e,
        value: this.state.previousValue + e,
        isOperatorAllowed: false,
        afterEqualControl: false
      });
    }
    return;
  };

  handleEqualClick = e => {
    if (this.state.isOperatorAllowed) {
      try {
        //we have used EVAL since it can't cause any security issue in this app
        this.setState({
          //eslint-disable-next-line
          previousValue: eval(this.state.previousValue),
          value: `${this.state.previousValue} = ${eval(
            this.state.previousValue
          )}`,
          isOperatorAllowed: true,
          afterEqualControl: true
        });
      } catch (err) {
        this.setState({ previousValue: "Error", afterEqualControl: true });
      }
    }
    return;
  };

  handleAcClick = e => {
    this.setState({
      previousValue: "",
      value: null,
      isOperatorAllowed: false,
      afterEqualControl: false
    });
  };

  handleBackspace = () => {
    this.setState({previousValue: this.state.previousValue.substring(0, this.state.previousValue.length - 1)})
  }

  render() {
    return (
      <div className="container">
        <div className="pseudoDiv topMargin"></div>
        <div className="pseudoDiv"></div>
        <CalcScreen stateInfo={this.state.previousValue} />
        <CalcButtons
          handleNumClick={this.handleNumClick}
          handleOperatorClick={this.handleOperatorClick}
          handleEqualClick={this.handleEqualClick}
          handleAcClick={this.handleAcClick}
        />
        <CalcLatest
          valueInfo={this.state.value}
          screenShow={this.state.afterEqualControl}
        />
      </div>
    );
  }
}

export default App;

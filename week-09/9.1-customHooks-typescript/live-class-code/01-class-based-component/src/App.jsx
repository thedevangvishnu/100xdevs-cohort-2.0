import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      render: true,
    };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return this.state.render ? <MyComponent /> : "";
  }
}

class MyComponent extends Component {
  componentDidMount() {
    console.log("mounted");
  }

  componentWillUnmount() {
    setTimeout(() => {
      this.setState({ render: !this.state.render });
    }, 5000);
    console.log("unmounted");
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <button
          onClick={this.increment}
        >{`Click me: ${this.state.counter}`}</button>
      </div>
    );
  }
}

export default App;

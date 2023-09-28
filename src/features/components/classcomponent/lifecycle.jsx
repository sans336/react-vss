import { Component } from "react";

class MyComponent extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('Component mounted.');
  }

  componentDidUpdate(prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count was updated:', this.state.count);
    }
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default MyComponent;
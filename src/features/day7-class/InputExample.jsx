import { Component } from "react";

class InputExample extends Component {
  state = {
    uName: "",
    uEmail: "",
    uCity: "",
  };

  render() {
    return (
      <div>
        <div className="form-elements">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter your full name"
            value={this.state.uName}
            onChange={(e) => {
            //   console.log(e.target.value);
              this.setState({ uName: e.target.value });
            }}
          />
        </div>
        <div className="form-elements">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter your email address"
            value={this.state.uEmail}
            onChange={(e) => {
            //   console.log(e.target.value);
              this.setState({ uEmail: e.target.value });
            }}
          />
        </div>

        <div className="form-elements">
          <p>City</p>
          <input
            type="text"
           
            placeholder="Enter your city"
            value={this.state.uCity}
            onChange={(e) => {
            //   console.log(e.target.value);
              this.setState({ uCity: e.target.value });
            }}
          />
        </div>

        <div>
          <p>Name: {this.state.uName}</p>
                <p>Email: {this.state.uEmail}</p>
                <p>city:{this.state.uCity}</p>
        </div>
      </div>
    );
  }
}

export default InputExample;
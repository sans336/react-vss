import { Component } from "react";
export default class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      city: "",
      contactNumber: "",
    };
  }

  _handleNameInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <div className="input-element">
            <input
              name="name"
              value={this.state.name}
              placeholder="Enter name"
              onChange={this._handleNameInput}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">City</label>
          <div className="input-element">
            <input
              name="city"
              value={this.state.city}
              placeholder="Enter City"
              onChange={this._handleNameInput}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">Contact Number</label>
          <div className="input-element">
            <input
              name="contactNumber"
              value={this.state.contactNumber}
              placeholder="Enter Contact Number"
              onChange={this._handleNameInput}
            />
          </div>
        </div>
      </div>
    );
  }
}
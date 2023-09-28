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
//     handleonchange = (e) => {
//         console.warn(e.target.name, e.target.value)
//         this.setState((data) =>{name:"sans"})
// }
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
                        onChange={this.handleonchange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">City</label>
          <div className="input-element">
            <input
              value={this.state.city}
              placeholder="Enter City"
              onChange={(e) => {
                this.setState({
                  city: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="name">Contact Number</label>
          <div className="input-element">
            <input
              value={this.state.contactNumber}
              placeholder="Enter Contact Number"
              onChange={(e) => {
                this.setState({
                  contactNumber: e.target.value,
                });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
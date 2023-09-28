
import { Component } from "react";
class ToggleButton extends Component {
  constructor() {
    super();
    this.state = {
      isOn: false, 
    };
  }
  toggleButton = () => {
    this.setState(() => ({
      isOn: !this.state.isOn, 
    }));
  }
  render() {
    
    const buttonLabel = this.state.isOn ? 'On' : 'Off';

    return (
      <div>
        <p>The button is {buttonLabel}</p>
        <button onClick={this.toggleButton}>Toggle</button>
      </div>
    );
  }
}
export default ToggleButton;

import { Component } from "react";
export default class Toggle extends Component{
    constructor() {
        super();
        this.state = {
            show:true
        }
    }
    click = () => {
        this.setState({
            show:!this.state.show
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.show ?
                        <h1>hide and show</h1>
                        :null
                }
                
                <button onClick={this.click}>click me</button>

            </div>
        )
    }
}
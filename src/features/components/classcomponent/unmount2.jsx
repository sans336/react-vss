import { Component } from "react";
import Unmount from "./unmount";
class Apps extends Component{
    constructor() {
        super()
        this.state = {
            toggle:true
        }
        
    }
    render() {
        return (
            <div>
                <Unmount/>
                <h1>react:componentWillUnmount</h1>
                {
                    this.state.toggle?<Unmount/>:null
                }
                <button onClick={()=>{this.setState({toggle:!this.state.toggle})}}>delete</button>
            </div>
        )
    }
}
export default Apps;
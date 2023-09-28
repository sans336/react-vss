import { Component } from "react";
export default class Startbtn extends Component {
    
    constructor() {
        super();
        this.state = {
            name: 'peter',
            email: 'sanskritij76@gmail.com',
            count: 0
        };
    } 
    updateState = ()=>{
        this.setState({
            // name: 'nanee',
            count:this.state.count+1
        })
    }
    render()
    {
        return (
           <div>
            <div>
                    {/* <h3>hello {this.state.name}</h3> */}
                    <h3>email: {this.state.email}</h3>
                    <h3>count:{this.state.count}</h3>
            <button onClick={this.updateState}>off</button>
            </div>
            
        </div>
        )
    }
}
import { Component } from "react";
export default class Unmount extends Component{
    componentWillUnmount() {
        alert("hi")
    }
    render() {
        return (
            <div>
                <ul><li>
                    anu
                </li>
                <li>tanu</li></ul>
            </div>
        )
    }
}
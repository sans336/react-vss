import { Component } from "react";
// class Car extends Component{
//     render() {
//         return <h1>hi i am a car</h1>
//     }
// } export default Car

export class Profile extends Component{
    constructor() {
         super()
    }
   
    componentDidMount() {
        console.warn("hi i am lifecycle")
    }
    render() {
        return(
        <div>
            <h1> hi i am returning</h1>
        </div>)
    }
    }   

import { Component } from "react";
import Header from "./header.layout";
import Footer from "./Footer.Layout";

class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1 style={{ color: "tomato" }}>Hello Yash</h1>
        <button>Get Details</button>
        <button>Get Career Profiles</button>
        <button>click me</button>
        <input type="text" />
        <Footer />
      </div>
    );
  }
}

export default Homepage;
import React, { Component } from "react";
import Social from "../components/Social";
class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">Contact Me</h1>
                <h3>Email : bordia999@gmail.com</h3>
                <h3>Github : github.com/ThatDevCoder</h3>
                <h3>LinkedIn : linkedin.com/in/devyash-bordia/</h3>
                <h3>Twitter : twitter.com/DevyashB</h3>
                <Social />
            </div>
        );
    }
}

export default Contact;

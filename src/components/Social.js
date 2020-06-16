import React, { Component } from "react";

class Social extends Component {
    render() {
        return (
            <div class="social">
                <a href="https://github.com/ThatDevCoder" target="_blank">
                    <i class="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/devyash-bordia/"
                    target="_blank"
                >
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a
                    href="https://www.facebook.com/devyash.bordia/"
                    target="_blank"
                >
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/DevyashB" target="_blank">
                    <i class="fab fa-twitter"></i>
                </a>
            </div>
        );
    }
}

export default Social;

import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/1_2_devyash_photo.jpg";
import Social from "../components/Social";

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src={profilepic} className="profilepic"></img>
                <ReactTypingEffect
                    className="typingeffect"
                    text={[
                        "I am Devyash Bordia",
                        "I am a web developer",
                        "Nurturing full-stack developer",
                        "Still Learning new Technologies",
                    ]}
                    speed={100}
                    eraseDelay={700}
                />
                <Social />
            </div>
        );
    }
}

export default Home;

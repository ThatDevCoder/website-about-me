import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard
                    title="B.Tech Computer Science"
                    where="SRM University"
                    from="July 2017"
                    to="Present"
                />
                <Widecard
                    title="SSC | HSC"
                    where="Lions English School, DNH"
                    from="2015"
                    to="2017"
                />
            </div>
        );
    }
}

export default Education;

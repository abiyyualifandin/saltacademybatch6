import React, { Component } from "react";

export class Cheader extends Component {
    constructor() {
        super();
        this.state = {
            title: "MY FIRST WEB",
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="bg-header">
                <h1>{this.state.title}</h1>

                <p>{this.props.headerName}</p>
                <p>{this.props.headerAddress}</p>
                <p>{this.props.headerClass}</p>
            </div>
        )
    }
}

export default Cheader;
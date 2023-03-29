import React, { Component } from "react";

export class Cfooter extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="bg-footer">
                <p>{this.props.headerName}</p>
                <p>{this.props.headerAddress}</p>
                <p>{this.props.headerClass}</p>
            </div>
        )
    }
}

export default Cfooter;
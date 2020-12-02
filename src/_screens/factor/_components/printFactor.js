import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class PrintFactor extends Component {
    printHandler = () => {
        window.print();
    }

    render() {

        return(<>
            <div className="printFactor border d-flex justify-content-center align-items-center p-2 my-2 btn btn-info " onClick={this.printHandler}>
                <i className="fas fa-print"></i>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>{"چاپ صورت حساب"}</span>
            </div>
        </>)
    }
}
const printFactorWithRouter = withRouter(PrintFactor);

export { printFactorWithRouter as PrintFactor }
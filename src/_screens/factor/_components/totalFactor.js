import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { lsJoinProductArray } from '../_helpers/lsJoinProductArray';

class TotalFactor extends Component {

    //Total
    totalFactorArray = () => {
        let exist = lsJoinProductArray();
        const reducer = (accumulator, currentValue) => accumulator + currentValue.quantity * currentValue.price;
        let total = exist.reduce(reducer, 0);
        return total;
    }

    render() {

        return(<>
            <div className="border d-flex justify-content-center p-2 bg-secondary shadow rounded my-2">
                <span>{"مبلغ قابل پرداخت:"}</span>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span className="">{this.totalFactorArray()}</span>
            </div>
        </>)
    }
}
const totalFactorWithRouter = withRouter(TotalFactor);

export { totalFactorWithRouter as TotalFactor }
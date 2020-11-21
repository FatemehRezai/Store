import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { WidgetTitle } from './index';
import { category } from "../_const/Category";

//truthtable file 
//https://github.com/FatemehRezai/Store/blob/0c5022c2cd949e4b163b9b1b6057c9fb69fd968e/src/_components/table.js

// Load the full build.
var _ = require('lodash');

class MySearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }

    

    render() {
        // console.log("this.props.data   " , this.props.data);//style={{ maxWidth: "136px" }}
        return <>
            <div key={this.props.data} className="">
                <form className="" action="">
                    <input type="text" placeholder="جستجو..." name="search" className="col-12 form-control" />
                    {/* <button type="submit" className="col-3 btn btn-primary" ><i className="fa fa-search"></i></button> */}
                </form>
            </div>
        </>
    }

}
const mySearchBarWithRouter = withRouter(MySearchBar);

export { mySearchBarWithRouter as MySearchBar};

MySearchBar.propTypes = {
    data: PropTypes.array,
    column: PropTypes.array,
    title: PropTypes.string,
    widgetTitle: PropTypes.string,
}
MySearchBar.defaultProps = {
    data: [],
    column: [],
    title: "",
    widgetTitle: "لیست",
}
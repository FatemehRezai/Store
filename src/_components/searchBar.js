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
            searchKey: '',
            // searchData: [],
        };
    }

    filterFunction = (key) => {
        this.setState({ searchKey: key })
    }
    onFilter = () => {
        const { searchKey } = this.state;
        const { data, setData } = this.props;

        let _data = [...data];
        _data = _.filter(_data, (item) => {
             const keys = Object.keys(item);    
             let res = keys.map( key => {
                 return `${item[key]}`.includes(`${searchKey}`);
             }) 
             let isTrue = res.includes(true) || `${searchKey}` ==='';
             if (isTrue) {
                 return item;
             }
        });

       setData(_data);

    //    this.setState( {searchData: _data}, () => {
    //     setData(searchData);
    //     console.log("data  ", searchData);
    //    });
    }

    OnKeyDownHandler = (e) => {
        // Enter is pressed
        if (e.charCode === 13) {
            this.onFilter();
        }
    }
    

    render() {
        // console.log("this.props.data   " , this.props.data);//style={{ maxWidth: "136px" }}
        return <>
            <div key={this.props.data} className="m-3">
                <input type="text" placeholder="جستجو..." name="search" className="col-12 form-control" value={this.state.searchKey} onChange={(e)=>this.filterFunction(e.target.value)} onKeyPress={this.OnKeyDownHandler}/>
                {/* <button type="submit" className="col-3 btn btn-primary" ><i className="fa fa-search"></i></button> */}
            </div>
        </>
    }

}
const mySearchBarWithRouter = withRouter(MySearchBar);

export { mySearchBarWithRouter as MySearchBar};

MySearchBar.propTypes = {
    data: PropTypes.array,
}
MySearchBar.defaultProps = {
    data: [],
    
}
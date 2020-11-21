import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { WidgetTitle } from '../_components/index';
import { category } from "../_const/Category";

//truthtable file 
//https://github.com/FatemehRezai/Store/blob/0c5022c2cd949e4b163b9b1b6057c9fb69fd968e/src/_components/table.js

// Load the full build.
var _ = require('lodash');

class MyTable2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data || [],
            sortToggle: false,
        };
    }

    onSort = (data, sortKey, dir = "des") => {
        let sorted = _.sortBy(data, sortKey)
        sorted = this.state.sortToggle? sorted.reverse() : sorted;
        this.setState({ data: sorted , sortToggle: !this.state.sortToggle});
    }

    generateHeader = () => {
        const { column } = this.props;
        const { data } = this.state;
        let res = [];
        column.map((value, index) => {
            const sortFunction = value.sortable ? () => this.onSort(data, value.columnHeader_name) : "";
            if (value.sortable) {
                return (res.push(<th key={value.columnHeader_id} onClick={sortFunction} style={{ cursor: 'pointer' }} ><i class="fas fa-sort"></i> {value.title}</th>))
            }

            return (res.push(<th key={value.columnHeader_id}  >{value.title}</th>))
        })
        return res;
    }

    // //onclick method and go to product info need to check and change
    // gotoProductInfo = (productId) => {
    //     // console.log("this.props.   table",  this.props);
    //     const productCategory = this.props.location.pathname;
    //     this.props.history.push({
    //         pathname: productCategory + '/' + productId,
    //         // state: this.props.data
    //     });
    // }
    generateTableData = () => {
        const {column, onClick} = this.props;
        const {data} = this.props;
        let res = [];

        data.map((value, index) => {
            return (
                res.push(
                    ////////////////////?????
                    <tr key={value.productId}>
                        {/* productId */}
                        {column.map((value2, index2) => {
                            return (<td key={value2.columnHeader_id}><span style={{ display: "inline-block" }} onClick={() => { onClick && onClick(value2, value) }}>{value2.fun(value)}</span></td>);//props click
                            // if (value2.type === 'info') {
                            //     return (<td key={value2.columnHeader_id} onClick={()=> {onClick && onClick(value2, value)}}><Button color="info" >مشاهده</Button></td>);
                            // } else {
                            //     return (<td key={value2.columnHeader_id}><span style={{display:"inline-block"}} onClick={()=> {onClick && onClick(value2, value)}}>{value2.fun(value)}</span></td>);
                            // }
                        })
                        }
                    </tr>
                )
            )
        })
        return res;
    }

    render () {
        // console.log("this.props.data   " , this.props.data);
        return <>
            <div key={this.props.data} className="d-flex flex-column w-75p ">
                {/* <caption className="align-self-start px-5">لیست پوشاک</caption> */}
                <WidgetTitle title={this.props.title} widgetTitle={this.props.widgetTitle}/>
                <table className="table table-hover table-responsive border"> 
                    <thead className="thead-light text-center">
                        <tr>
                            {this.generateHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateTableData()}
                    </tbody>
                </table>
            </div>
        </>
    }

}
const MyTable2WithRouter = withRouter(MyTable2);

export { MyTable2WithRouter as MyTable2};

MyTable2.propTypes = {
    data: PropTypes.array,
    column: PropTypes.array,
    title: PropTypes.string,
    widgetTitle: PropTypes.string,
}
MyTable2.defaultProps = {
    data: [],
    column: [],
    title: "",
    widgetTitle: "لیست",
}
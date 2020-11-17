import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { WidgetTitle } from '../_components/index';
import { category } from "../_const/Category";

// Load the full build.
var _ = require('lodash');

class MyTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            data:this.props.data || [],
            sortToggle: false,
            filterKey: '',
        };
    }

    onSort = (data, sortKey, dir = "des") => {
        let sorted = _.sortBy(data, sortKey)
        sorted = this.state.sortToggle? sorted.reverse() : sorted;
        this.setState({ data: sorted , sortToggle: !this.state.sortToggle});
    }

    onFilter = (e, data, filed) => {
        const { name, value, type } = e.target;
        const fieldStr = filed.toString();
        const tempValue = (type === 'number') ? +value : value;
        
        console.log("e.target.name ", e.target.name , "  e.target.value ", e.target.value );
        console.log("tempValue ", tempValue );

        this.setState({ [name]: tempValue }, () => {
            
            // console.log("filterKey ", typeof this.state.filterKey);

            //_.matchesProperty(path, srcValue)
            // path (Array|string): The path of the property to get.
            // srcValue (*): The value to match.
            let filtered = _.filter(data, _.matchesProperty(fieldStr, tempValue));

            filtered.length > 0 && this.setState({ data: filtered });
            }
        );
    }

    generateHeader = () => {
        const { column } = this.props;
        const { data } = this.state;
        let res = [];
        column.map((value, index) => {
            const sortFunction = value.sortable ? () => this.onSort(data, value.columnHeader_name) : "";
            if (value.sortable) {
                return (res.push(<th key={value.columnHeader_id} className="border-left" ><i class="fas fa-sort" style={{ cursor: 'pointer' }} onClick={sortFunction}></i> {value.title}</th>));
            }

            return (res.push(<th key={value.columnHeader_id} className="border-left" >{value.title}</th>))
        })
        return res;
    }
    generateFilterHeader = () => {
        const { column } = this.props;
        const { data } = this.state;
        let res = [];
        column.map((value, index) => {
            const filterFunction = (e) => this.onFilter(e, data, value.columnHeader_name);///////////////////////
            if (value.filterable) {
                let x = value.columnHeader_name;//this input property in state named with value.columnHeader_name
                return (res.push(<th key={value.columnHeader_id} className="border-left" style={{ maxWidth: "128px" }} ><input className="form-control" type={value.type} placeholder={value.title} name={value.columnHeader_name} value={this.state[x]} onChange={filterFunction} ></input></th>));
            }
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
        const {data} = this.state;
        let res = [];

        data.map((value, index) => {
            return (
                res.push(
                    ////////////////////?????
                    <tr key={value.productId}>
                        {/* productId */}
                        {column.map((value2, index2) => {
                            return (<td key={value2.columnHeader_id} ><span style={{ display: "inline-block" }} onClick={() => { onClick && onClick(value2, value) }}>{value2.fun(value)}</span></td>);//props click
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
            <div key={this.props.data} className="d-flex flex-column" style={{ maxWidth: "75%" }}>
                {/* <caption className="align-self-start px-5">لیست پوشاک</caption> */}
                <WidgetTitle title={this.props.title} widgetTitle={this.props.widgetTitle}/>
                <table className="table table-hover table-responsive border"> 
                    <thead className="thead-light text-center">
                        <tr>
                            {this.generateHeader()}
                        </tr>
                    </thead>
                    <thead className="thead-light text-center">
                        <tr>
                            {this.generateFilterHeader()}
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
const myTableWithRouter = withRouter(MyTable);

export { myTableWithRouter as MyTable};

MyTable.propTypes = {
    data: PropTypes.array,
    column: PropTypes.array,
    title: PropTypes.string,
    widgetTitle: PropTypes.string,
}
MyTable.defaultProps = {
    data: [],
    column: [],
    title: "",
    widgetTitle: "لیست",
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
// generateTableData = () => {
//     const {data, column, onClick} = this.props;
//     let res = [];

//     data.map((value, index) => {
//         return (
//             res.push(
//                 ////////////////////?????
//                 <tr key={value.productId}>
//                     {/* productId */}
//                     {column.map((value2, index2) => {
//                         // return (<td key={value2.columnHeader_id}><span style={{display:"inline-block"}} onClick={()=> {onClick && onClick(value2, value)}}>{value2.fun(value)}</span></td>);
//                         if (value2.type === 'info') {
//                             /////////////????????????????????
//                             return (<td key={value2.columnHeader_id} onClick={()=> {onClick && onClick(value2, value)}}><Button color="info" onClick={() => this.gotoProductInfo(value.productId)}>مشاهده</Button></td>);
//                         } else {
//                             return (<td key={value2.columnHeader_id}><span style={{display:"inline-block"}} onClick={()=> {onClick && onClick(value2, value)}}>{value2.fun(value)}</span></td>);
//                         }
//                     })
//                     }
//                 </tr>
//             )
//         )
//     })
//     return res;
// }


// import employ from '../employ.json';
// const columnHeader =["Id","firstName","lastName","email","gender"];


// class MyTable extends Component {
//     constructor(props){
//         super(props);
//     }

//     generateHeader = () => {
//         let res=[];
//       for(var i =0; i < columnHeader.length; i++){
//           res.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
//       }
//       return res;
//     }
//     generateTableData = () => {
//         let res=[];
//         let tableData = employ.data;
//         for(var i =0; i < tableData.length; i++){
//             res.push(
//              <tr >
//                 <td key={tableData[i].id}>{tableData[i].id}</td>
//                 <td key={tableData[i].firstName}>{tableData[i].firstName}</td>
//                 <td key= {tableData[i].lastName}>{tableData[i].lastName}</td>
//                 <td key={tableData[i].email}>{tableData[i].email}</td>
//                 <td key={tableData[i].gender}>{tableData[i].gender}</td>
//             </tr>
//             )
//         }
//         return res;
//     }

//     render () {
//         return <>
//             <caption>پوشاک</caption>
//             <table className="table  table-hover"> 
//                 <thead>
//                     <tr>
//                     {this.generateHeader()}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {this.generateTableData()}
//                 </tbody>
//             </table>
//         </>
//     }

// }
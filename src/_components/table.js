import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { WidgetTitle } from '../_components/index';
import { category } from "../_const/Category";



class MyTable extends Component {


    generateHeader = () => { 
        const {column} = this.props;
        let res = [];
        column.map( (value,index) => {
            return( res.push(<th key={value.columnHeader_id}>{value.title}</th>) )
        } )
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
        const {data, column, onClick} = this.props;
        let res = [];

        data.map((value, index) => {
            return (
                res.push(
                    ////////////////////?????
                    <tr key={value.productId}>
                        {/* productId */}
                        {column.map((value2, index2) => {
                            return (<td key={value2.columnHeader_id}><span style={{display:"inline-block"}} onClick={()=> {onClick && onClick(value2, value)}}>{value2.fun(value)}</span></td>);//props click
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
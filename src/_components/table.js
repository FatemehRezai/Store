import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import { WidgetTitle, WidgetExtra } from '../_components/index';
import { category } from "../_const/Category";

// Load the full build.
var _ = require('lodash');

class MyTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            externalData: null,
            data: props.data || [],
            categoryName: props.categoryObj.categoryItem_name || "",
            sortToggle: false,
            filterKey: '',
            sortKey: '',
            filters: {},
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.data !== prevState.data) {
            let _data = nextProps.data;
            if (prevState.sortKey){
                _data = MyTable._sort(_data, prevState.sortKey, prevState.sortToggle);
            }
            _data = MyTable._filter(_data, prevState.filters);
            return {
              externalData: null,
              data: _data,
            };
        }
      
          // No state update necessary
          return null;
    }

    static _sort = (data, sortKey, sortToggle) => {
        let sorted = _.sortBy(data, sortKey)
        return sortToggle? sorted.reverse() : sorted;
    }

    onSort = (data, sortKey, dir = "des") => {
        let sorted = MyTable._sort(data, sortKey, this.state.sortToggle);
        this.setState({ data: sorted, sortKey, sortToggle: !this.state.sortToggle});
    }

    static _filter = (data, filters) => {
        const keys = Object.keys(filters);
        let _data = [...data];
        // console.log(filters, _data);
        keys.map( key => {
            _data = _.filter(_data, (item) => {
                return `${filters[key]}` ==='' || `${item[key]}` === `${filters[key]}`;
            } )
        });
        return _data;
    } 
    onFilter = (data) => {
        const {filters} = this.state;
        this.setState( {data: MyTable._filter(data, filters)});    
    }
    

    generateHeader = () => {
        const { column } = this.props;
        const { data } = this.state;
        let res = [];
        column.map((value, index) => {
            const sortFunction = value.sortable ? () => this.onSort(data, value.columnHeader_name) : "";
            if (value.sortable) {
                return (res.push(<th key={value.columnHeader_id} className="border-left" ><i className="fas fa-sort" style={{ cursor: 'pointer' }} onClick={sortFunction}></i> {value.title}</th>));
            }

            return (res.push(<th key={value.columnHeader_id} className={`th_${value.columnHeader_id} border-left`} >{value.title}</th>))
        })
        return res;
    }
    generateFilterHeader = () => {
        const { data, column } = this.props;
        const { filters } = this.state;
        let res = [];
        const filterFunction = (value, key) => {
            filters[key] = value;
            this.setState({ data, filters }, () => {
                // this.onFilter(data);///////////////////////
            })
        }
        const OnKeyDownHandler = (e) => {
            // Enter is pressed
            if (e.charCode === 13) {
                this.onFilter(data);
            }
        }
        column.map((value, index) => {
            if (value.filterable) {
                let x = value.columnHeader_name;//this input property in state named with value.columnHeader_name
                return (res.push(<th key={value.columnHeader_id} className="border-left" style={{ maxWidth: "256px" }} >
                    <input className="form-control" type={value.type} placeholder={value.title} name={value.columnHeader_name} value={filters[x]} onChange={(e)=>filterFunction(e.target.value, x)} onKeyPress={OnKeyDownHandler} ></input></th>));
            }
            return (res.push(<th key={value.columnHeader_id} className="border-left" style={{ maxWidth: "136px" }}></th>))
        })
        return res;
    }

    generateTableData = () => {
        const {column, onClick} = this.props;
        const {data} = this.state;
        let res = [];

        data.map((value, index) => {
            return (
                res.push(
                    ////////////////////?????
                    <tr key={value.productId}>
                        
                        {column.map((value2, index2) => {
                            return (<td key={value2.columnHeader_id} className={`td_${value2.columnHeader_id}`} ><span style={{ display: "inline-block" }} onClick={() => { onClick && onClick(value2, value, this.state.categoryName) }}>{value2.fun(value)}</span></td>);//props click
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
        const renderWidgetExtra = () => {
            if (this.props.havePin === true) {
                return <WidgetExtra type={'table'} categoryObj={this.props.categoryObj} column={this.props.column} screenType={this.props.screenType} />;
            }
        }

        return <>
            <div key={this.props.data} className="d-flex flex-column shadow-sm" style={{ maxWidth: "75%" }}>
                {/* <caption className="align-self-start px-5">لیست پوشاک</caption> */}
                <div className="d-flex justify-content-between align-items-center p-1">
                    <WidgetTitle title={this.props.title} widgetTitle={this.props.widgetTitle}/>
                    {renderWidgetExtra()}
                </div>
                
                <table className="table table-hover table-responsive border"> 
                    <thead className="thead-light text-center">
                        <tr>
                            {this.generateHeader()}
                        </tr>
                    </thead>
                    <thead className="thead-light text-center">
                        <tr className="tableFilterHeader">
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
    categoryObj: PropTypes.object,
}
MyTable.defaultProps = {
    data: [],
    column: [],
    title: "",
    widgetTitle: "لیست",
    categoryObj: {},
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
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class MySidebar extends Component {

    generateCategory = () => {
        const {data , pageId} = this.props;
        
        let res = [];
        data.map( (value , index ) => {
            let isActive = (+pageId === +(value.categoryItem_id));
            const modifiedclassName = isActive? "testClick list-group-item list-group-item-action py-3 my-1 active":
                            "testClick list-group-item list-group-item-action py-3 my-1";

            res.push(<li key = {value.categoryItem_id}><a className={modifiedclassName} href={value.categoryItem_href}><i className={value.categoryItem_icon}></i> {value.categoryItem_title} </a></li>) 
        })
        return res;
    }
    
    render() {
        return <>
            <div className="mysidebar d-none d-md-block col-md-3 bg-dark py-5 h-100 fixed-right">
                <ul className="list-group">
                    {this.generateCategory()}
                </ul>
            </div>
        </>
    }
} 
const mySidebarWithRouter = withRouter(MySidebar);

export { mySidebarWithRouter as MySidebar};

MySidebar.propTypes = {
    data: PropTypes.array,
    pageId: PropTypes.number,
}
MySidebar.defaultProps = {
    data: [],
    pageId: 0,
}
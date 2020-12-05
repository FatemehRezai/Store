import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import mainPath from '../_const/MainPath';


class MyResponsiveNavbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            collapsed: true,
        };
    }

    goHome = () => {
        this.props.history.push('/');
    }
    
    goDashboard = () => {
        this.props.history.push('/dashboard');
    }

    goFactor = () => {
        this.props.history.push('/factor');
    }

    generateMainPathSide = (props) => {
        let res = [];
        mainPath.map( (value , index ) => {
            //set active for Nav Item
            const {path} = props.match;//typeof path is string 
            let isActive = (path === value.href );
            const modifiedclassName = isActive ? "active" : "";

            res.push(<li style={{flex:"1 1 100%"}} key = {value.id} className="rounded m-1 text-center"><a className={`${modifiedclassName} testClick list-group-item list-group-item-action py-3 my-1`} href={value.href}><i className={value.icon}></i> </a></li>) 
        })
        return res;
    }

    generateCategorySide = () => {
        const {data , pageId} = this.props;
        
        let res = [];
        data.map( (value , index ) => {
            let isActive = (+pageId === +(value.categoryItem_id));
            const modifiedclassName = isActive? "testClick list-group-item list-group-item-action py-3 my-1 active":
                            "testClick list-group-item list-group-item-action py-3 my-1";

            res.push(<li key = {value.categoryItem_id} className="rounded"><a className={modifiedclassName} href={value.categoryItem_href}><i className={value.categoryItem_icon}></i> {value.categoryItem_title} </a></li>) 
        })
        return res;
    }

    //Navbar toggeler
    toggleNavbar = () =>{
        this.setState({
            collapsed: ( !(this.state.collapsed) ),
        })
    }

    generateMainPathNav = (props) => {
        let res = [];
        mainPath.map( (value , index ) => {
            //set active for Nav Item
            const {path} = props.match;//typeof path is string 
            let isActive = (path === value.href );
            const modifiedclassName = isActive? "active" :"";

            res.push(
                <NavItem key = {value.id} className={`${modifiedclassName} rounded`}>
                    <NavLink href={value.href} className="px-1" ><i className={value.icon}></i> {value.title} </NavLink>
                </NavItem>
            );

        })
        return res;
    }

    generateCategoryNav = () => {
        const {data , pageId} = this.props;
        
        let res = [];
        data.map( (value , index ) => {
            let isActive = (+pageId === +(value["categoryItem_id"]));
            const modifiedclassName = isActive? "active" :"";

            res.push(
                <NavItem key = {value.categoryItem_id} className={`${modifiedclassName} rounded`}>
                    <NavLink href={value.categoryItem_href} className="px-1" ><i className={value.categoryItem_icon}></i> {value.categoryItem_title} </NavLink>
                </NavItem>
            );

        })
        return res;
    }

    render() {
        return <>
            {/* <!-- sidebar --> */}
            <div className="mysidebar d-none d-md-block col-md-3 bg-dark py-5 h-100 fixed-right">
                <ul className="list-group d-flex flex-row h5">
                    {this.generateMainPathSide(this.props)}
                </ul>
                <ul className="list-group">
                    {this.generateCategorySide()}
                </ul>
            </div>
            

            {/* <!-- navbar --> */}
            {/* <!-- On screens that are less than 768px wide, make the sidebar into a topbar  --> */}
            <div className="mynavbar d-md-none d-block bg-dark fixed-top">
                
                <Navbar dark>
                    {/* <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2 mb-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar className="mr-2">
                        <Nav navbar>
                            {this.generateMainPathNav(this.props)}
                            {this.generateCategoryNav()}
                        </Nav>
                    </Collapse>
                </Navbar> 
            </div>
            
                    
        </>
    }
}
const myResponsiveNavbarWithRouter = withRouter(MyResponsiveNavbar);

export { myResponsiveNavbarWithRouter as MyResponsiveNavbar};

MyResponsiveNavbar.propTypes = {
    data: PropTypes.array,
    pageId: PropTypes.number,
}
MyResponsiveNavbar.defaultProps = {
    data: [],
    pageId: 0,
}
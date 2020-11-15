import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';


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

    goFactor = () => {
        this.props.history.push('/factor');
    }

    generateCategorySide = () => {
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

    //Navbar toggeler
    toggleNavbar = () =>{
        this.setState({
            collapsed: ( !(this.state.collapsed) ),
        })
    }

    generateCategoryNav = () => {
        const {data , pageId} = this.props;
        
        let res = [];
        data.map( (value , index ) => {
            let isActive = (+pageId === +(value["categoryItem_id"]));///////////////////////////////////////////////////////
            const modifiedclassName = isActive? "active" :"";

            res.push(
                <NavItem key = {value.categoryItem_id} className={modifiedclassName}>
                    <NavLink href={value.categoryItem_href}><i className={value.categoryItem_icon}></i> {value.categoryItem_title} </NavLink>
                </NavItem>
            );

        })
        return res;
    }
    render() {
        return <>
            {/* <!-- sidebar --> */}
            <div className="mysidebar d-none d-md-block col-md-3 bg-dark py-5 h-100 fixed-right">
                <div className="cartButton justify-content-between mx-1 my-3 d-flex row">
                    <button type="button" className="btn btn-light btn-lg " onClick={() => this.goHome()}>
                        <i className="fas fa-home"></i>
                    </button>
                    <button type="button" className="btn btn-light btn-lg " onClick={() => this.goFactor()}>
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </div>
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
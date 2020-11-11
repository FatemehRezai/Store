import React , { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';


class MyNavbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            collapsed: true,
        }
    }

    //Navbar toggeler
    // const [collapsed, setCollapsed] = useState(true);
    // const toggleNavbar = () => setCollapsed(!collapsed);
    toggleNavbar = () =>{
        this.setState({
            collapsed: ( !(this.state.collapsed) ),
        })
    }

    generateCategory = () => {
        const {data , pageId} = this.props;
        
        let res = [];
        data.map( (value , index ) => {
            let isActive = (+pageId === +(value.categoryItem_id));
            const modifiedclassName = isActive? "active" :"";

            res.push(
                <NavItem key = {value.categoryItem_id} className={modifiedclassName}>
                    <NavLink href={value.categoryItem_href}><i className={value.categoryItem_icon}></i> {value.categoryItem_title} </NavLink>
                </NavItem>
            );

        })
        return res;
    }

    render () {

        return <>
            <div className="mynavbar d-md-none d-block bg-dark fixed-top">
                <Navbar dark>
                    {/* <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2 mb-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar className="mr-2">
                        <Nav navbar>
                            {this.generateCategory()}
                        </Nav>
                    </Collapse>
                </Navbar> 
            </div>
        </>
    }
}
// export default MyNavbar; 

const myNavbarWithRouter = withRouter(MyNavbar);

export { myNavbarWithRouter as MyNavbar};

MyNavbar.propTypes = {
    data: PropTypes.array,
    pageId: PropTypes.number,
}
MyNavbar.defaultProps = {
    data: [],
    pageId: 0,
}
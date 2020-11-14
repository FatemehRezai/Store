import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Table } from "reactstrap";

class PageTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    render() {
        const {title} = this.props;
        return(<>
            <div className="border-bottom h3 m-5 p-3 font-weight-bold">
                <span>صفحه {title} </span>
            </div>
        </>);
    }
}

const pageTitleWithRouter = withRouter(PageTitle);

export { pageTitleWithRouter as PageTitle }

// PageTitle.PropTypes = {
//     title: PropTypes.string,
// }
PageTitle.defaultProps = {
    title: "",
}
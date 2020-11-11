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
        const {categoryTitle} = this.props;
        return(<>
            <div>
                <span>لیست {categoryTitle} </span>
            </div>
        </>);
    }
}

const pageTitleWithRouter = withRouter(PageTitle);

export { pageTitleWithRouter as PageTitle }

// PageTitle.PropTypes = {
//     categoryTitle: PropTypes.string,
// }
PageTitle.defaultProps = {
    categoryTitle: "",
}
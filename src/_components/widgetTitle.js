import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { Table } from "reactstrap";

class WidgetTitle extends Component {
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

const widgetTitleWithRouter = withRouter(WidgetTitle);

export { widgetTitleWithRouter as WidgetTitle }

// WidgetTitle.PropTypes = {
//     categoryTitle: PropTypes.string,
// }
WidgetTitle.defaultProps = {
    categoryTitle: "",
}
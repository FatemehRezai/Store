import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

class WidgetTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: null,
        };
    }

    render() {
        const {title, widgetTitle} = this.props;
        return(<>
            <div className="mb-3">
                <span>{widgetTitle} {title} </span>
            </div>
        </>);
    }
}

const widgetTitleWithRouter = withRouter(WidgetTitle);

export { widgetTitleWithRouter as WidgetTitle }

// WidgetTitle.PropTypes = {
//     widgetTitle: PropTypes.string,
//     title: PropTypes.string,
// }
WidgetTitle.defaultProps = {
    widgetTitle: "",
    title: "",
}
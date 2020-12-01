import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';
import { setPin } from '../_contorollers/pinArray.controller';

class WidgetExtra extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    pinHandler = () => {
        const { type, categoryObj, screenType } = this.props;
        setPin( type, categoryObj, screenType );  
        alert("در داشبورد ذخیره شد.");
        
    } 

    render() {
        return <>
             <Button className="btn-sm btn-dark" id="pinButton" onClick={this.pinHandler}><i className="fas fa-thumbtack"></i></Button>
        </>
    }

}
const widgetExtraWithRouter = withRouter(WidgetExtra);

export { widgetExtraWithRouter as WidgetExtra }
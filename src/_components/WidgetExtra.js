import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';
import { setPin, removePinArrayItem } from '../_contorollers/pinArray.controller';

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
    unPinHandler = () => {
        const { id } = this.props;
        removePinArrayItem(id);  
        alert("از داشبورد حذف شد.");
        
    }
    pinRenderer = () => {
        if (this.props.havePin === true) {
            return <Button className="btn-sm btn-dark mx-2" id="pinButton" onClick={this.pinHandler}><i className="fas fa-thumbtack"></i></Button>;
        }
        if (this.props.haveUnPin === true) {
            return <Button className="btn-sm btn-dark mx-2" id="unPinButton" onClick={this.unPinHandler}><i className="fas fa-trash-alt"></i></Button>;
        }
    }

    render() {
        return <>
             {this.pinRenderer()}
        </>
    }

}
const widgetExtraWithRouter = withRouter(WidgetExtra);

export { widgetExtraWithRouter as WidgetExtra }
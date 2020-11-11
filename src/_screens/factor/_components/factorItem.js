import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import productArray from '../_const/ProductSampleList';
import { removeFactorArrayItem } from '../_contorollers/factors.contoroller';
import { Counter } from '.';

class FactorItem extends Component {
    state = {
        currentQuantity: this.props.quantity,
        temp: 0
    }

    onChangeHandler = (quantity) => {
        this.setState({
            currentQuantity: quantity
        });
    }
    removeHandler = () => {
        removeFactorArrayItem(this.props.id);
        this.props.forceUpdateHandler();
    }
    render() {
        const { id, quantity } = this.props;

        const isEqualId = (i) => +(i.id) === +(id);
        const index = productArray.findIndex(isEqualId);
        const { name, price, img } = productArray[index];//its better write it with find and handle probability error by checking product is empty or not


        return <div key={id}>
            <div className="factorItem">
                <div className="productImg"><img src={img} alt={name} /></div>
                <p> {name} </p>
                <p className="price">$ {price} </p>
                <Counter key={id} id={id} quantity={quantity} action={""} onChangeHandler={this.onChangeHandler} />
                <p className="price">$ {this.state.currentQuantity * price} </p>
                <p><button type="button" className="remove" onClick={this.removeHandler}><i className="fa fa-times"></i></button></p>
            </div>
        </div>
    }
}

const factorItemWithRouter = withRouter(FactorItem);

export { factorItemWithRouter as FactorItem }
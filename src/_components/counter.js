import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button } from 'reactstrap';
import {setFactor, getFactorArray} from '../_screens/factor/_contorollers/factors.contoroller';
/**
 * 
 */
class Counter extends Component {
    /**
     * 
     * @param {*} props 
     */
    constructor(props) {
        super(props);
        this.state = {
            quantity: props.quantity || 1,
            min: 1,
            max: 10
        };
    }
    /**
     * 
     * @param {*} item 
     */
    _test =(item) => {return 123;}

    increaseQuantity = () => {
        const { productId, action, productCategory } = this.props;
        const { quantity, max, min } = this.state;
        if (quantity < max) {
            // setState is async function if need to do sm after it you should write it in call back(2'th parameter)
            this.setState({ quantity: quantity + 1 }, () => {
                if (action !== "add") {
                    let tempId = productId;
                    let tempQuantity = quantity;

                    // console.log('tempQuantity  ', tempQuantity);

                    setFactor(tempId, tempQuantity, productCategory);
                    /////////////////////////////////////
                    this.props.onChangeHandler(tempQuantity);
                }
            })
        }
        // if (this.state.quantity < this.state.max) {
        //     // setState is async function if need to do sm after it you should write it in call back(2'th parameter)
        //     this.setState({ quantity: this.state.quantity + 1 }, () => {
        //         if (this.props.action !== "add") {
        //             let tempId = this.props.id;
        //             let tempQuantity = this.state.quantity;
        //             console.log('tempQuantity  ', tempQuantity);
        //             setFactor(tempId, tempQuantity);
        //             this.props.onChangeHandler(tempQuantity);
        //         }
        //     })
        // }
    }

    decreaseQuantity = () => {
        const { productId, action, productCategory } = this.props;
        const { quantity, max, min } = this.state;
        if (quantity > min) {
            // setState is async function if need to do sm after it you should write it in call back(2'th parameter)
            this.setState({ quantity: quantity - 1 }, () => {
                if (action !== "add") {
                    let tempId = productId;
                    let tempQuantity = quantity;

                    // console.log('tempQuantity  ', tempQuantity);

                    setFactor(tempId, tempQuantity, productCategory);
                    /////////////////////////////////////
                    this.props.onChangeHandler(tempQuantity);
                }
            })
        }

        // if (this.state.quantity > this.state.min) {
        //     // setState is async function if need to do sm after it you should write it in call back(2'th parameter)
        //     this.setState({ quantity: this.state.quantity - 1 }, () => {
        //         if (this.props.action !== "add") {
        //             let tempId = this.props.id;
        //             let tempQuantity = this.state.quantity;
        //             setFactor(tempId, tempQuantity);
        //             this.props.onChangeHandler(tempQuantity);
        //         }
        //     })
        // }

    }

    addToCart = () => {
        const { productId, productCategory } = this.props;
        const { quantity, max } = this.state;

        let tempId = productId;
        let factorArray = getFactorArray();

        const isEqualId = (i) => +(i.productId) === +(tempId);
        let factorItem = factorArray[factorArray.findIndex(isEqualId)];
        let tempQuantity = factorItem ? factorItem.quantity : 0;

        if (quantity + tempQuantity > max) {
            setFactor(tempId, max, productCategory); 
        }
        else{
            setFactor(tempId, (quantity + tempQuantity), productCategory);
        }
        
        
        this.props.history.push({ 
            pathname: '/factor',
        });
    }

    render () {
        const { productId, action, productCategory } = this.props;
        let button;
        if (action === "add") {
          button = <Button className="addToCartButton" onClick={this.addToCart}>افزودن به سبد خرید</Button>;
        }

        return <div >
            <div className="counter d-flex row m-1">
                <div className="quantitySelector  d-flex row mx-3">
                    <Button type="" className="add" onClick={this.increaseQuantity}><i className="fa fa-plus"></i></Button>
                    <div className="quantitySelectorNumber mx-2 py-1" data-max="10">
                        <span>
                          {this.state.quantity}
                        </span>
                    </div>
                    <Button type="button" className="remove" onClick={this.decreaseQuantity}><i className="fa fa-minus"></i></Button>
                </div>
                <div>
                    {button}
                </div>
            </div>           
        </div>
    }
}

const counterWithRouter = withRouter(Counter);

export { counterWithRouter as Counter}
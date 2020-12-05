import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
import { Counter } from "../_components/index";

class ProductInfo extends Component {

    render() {
        const { productId, data, productCategory } = this.props;
        console.log("data   " , data);

        const isEqualId = (i) => +(i.productId) === +(productId);
        const index = data.findIndex(isEqualId);
        console.log("data[index]   " , data[index]);
        const {description, name, img, title } = data[index];
        
        return <>
            <div id={productId} className="border d-flex h-50">
                
                <div id="productInfoImg" className="text-center m-auto p-2">
                    <img src={img} alt={name} className="productImg"/>
                </div>

                <div id="productInformation" className="d-flex flex-column p-3">
                    <p className="font-weight-bold">{title}</p>
                    <p>{description}</p>
                    <div className="flex-column mt-auto align-self-center">
                        <Counter productId={productId} action={"add"} productCategory={productCategory} />
                    </div>
                </div>

            </div>
        </>;
    }
}

withRouter(ProductInfo);
export {ProductInfo};
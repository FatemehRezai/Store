import React,{Component} from 'react';
import { withRouter } from "react-router-dom";
import { Counter } from "../_components/index";

class ProductInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity:props.quantity || 1,
            min: 1,
            max: 10
        };
    }

    render() {
        // const {id} =this.props.match.params;//typeof id is string 
        // const data = this.props.history.location.state;// dar vaghe bayad be jaye data zakhire bokonim to local storage ta badan azash estefade bokonim beja in ke az tarigh rout push konim
        // const {pathname} = this.props.location;
        // // let pathnameStr = pathname.split("/");
        // const productCategory = (pathname.split("/"))[1];
        // console.log("this.props    product" , this.props);
        // console.log("id  ", id);
        // console.log("data   " , data);
        // console.log("productCategory ", productCategory);
        const { productId, data, productCategory } = this.props;
        // console.log("id  ", productId);
        // console.log("data   " , data);

        const isEqualId = (i) => +(i.productId) === +(productId);///////////???????????????????
        const index = data.findIndex(isEqualId);
        // console.log("index   " , index);
        const {description, name, price, img, stock, title } = data[index];
        return <>
            <div id={productId} className="border d-flex h-50">
                <div id="productInfoImg" className="text-center m-auto p-2"><img src={img} alt={name} className="productImg"/></div>
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
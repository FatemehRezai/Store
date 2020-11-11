import React from 'react';
import { withRouter } from "react-router-dom";
// import logo from '../logo.png';
import { MyResponsiveNavbar } from '../_components/index';
import { ProductInfo } from "../_components/index";
import { productCategoryChecker } from '../_helpers/productCategoryChecker';

import category from '../_const/Category';

function Product(props) {

    const {id} = props.match.params;//typeof id is string 
    const {pathname} = props.location;
    
    //splite URL by "/" and take category name from it
    //example: http://localhost:3000/home-appliances/302
    const productCategory = (pathname.split("/"))[1];
    const productArray = productCategoryChecker(productCategory);
    
    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <ProductInfo productId={id} data={productArray} productCategory={productCategory} />
            </div>
        </div>
   
    </>);
}

withRouter(Product);
export {Product}
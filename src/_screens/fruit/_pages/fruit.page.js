import React, {useState} from 'react';
// import logo from '../logo.png';
// import fruit_productArray from '../_const/FruitـProductSampleList';
import column from '../../../_const/column';
import category from '../../../_const/Category';

import { MyTable, MyResponsiveNavbar, MySearchBar, MyChart } from '../../../_components';
import { productCategoryObj } from '../../../_helpers/productCategoryObj';
import { PageTitle } from '../../../_components/index';
import { get } from "../../../_helpers/store";


function Fruit(props) {
    //get product Array from local Storage
    let fruit_productArray = get('fruit_productArray');

    const categoryObj = productCategoryObj("fruit");
    const [data, setData] = useState(fruit_productArray);

    const click = (column, item) => {
        if (column.columnHeader_id === 5) {
            props.history.push({
                // pathname: 'clothing' + '/' + item.productId,
                pathname: `fruit/${item.productId}`,
            });
        }
    }
    
    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={categoryObj.categoryItem_id}/>

            {/* mainbar */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <PageTitle title={categoryObj.categoryItem_title} />
                <MySearchBar data={fruit_productArray} setData={setData} />
                <MyTable data={data} column={column} onClick={click} title={categoryObj.categoryItem_title} widgetTitle={"لیست"} categoryObj={categoryObj} havePin={true} screenType={"product"} />
                <MyChart data={data} title={categoryObj.categoryItem_title} categoryObj={categoryObj} havePin={true} screenType={"product"} />
            </div>
        </div>
    </>);
}

export {Fruit}




// {/* <div className="main d-flex px-0">
//             <div className="nav ">
//                 <button onClick={gotoFactor} className="shoppingCartButton"><i className="fa fa-shopping-cart fa-3x shoppingCart"></i></button>
//                 <img src={logo} alt="world" className="logo" />
//             </div>
//             <div className="mainbar" >
//                 <div className="productItemsList"> */}
//                     {/* {productArray.map( (product, index) => (
//                         <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} description={product.description}/>) 
//                     )} */}
//                 {/* </div>
//             </div>
// </div>     */}
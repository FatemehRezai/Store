import React, {useState} from 'react';
// import logo from '../logo.png';
// import clothing_productArray from '../_const/ClothingـProductSampleList';
import column from '../../../_const/column';
import category from '../../../_const/Category';
import { MyTable, MyResponsiveNavbar, MySearchBar, MyChart,  } from '../../../_components';
import { productCategoryObj } from '../../../_helpers/productCategoryObj';
import { PageTitle } from '../../../_components/index';
import { get } from "../../../_helpers/store";


function Clothing(props) {
    //get product Array from local Storage
    let clothing_productArray = get('clothing_productArray');

    const productObj = productCategoryObj("clothing");
    const [data, setData] = useState(clothing_productArray);

    const click = (column, item) => {
        if (column.columnHeader_id === 5) { // in column of info 
            props.history.push({
                pathname: `clothing/${item.productId}`,
            });
        }
    }
console.log("data ",data);
    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={productObj.categoryItem_id}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <PageTitle title={productObj.categoryItem_title} />
                <MySearchBar data={clothing_productArray} setData={setData} />
                <MyTable data={data} column={column} onClick={click} title={productObj.categoryItem_title} widgetTitle={"لیست"}/>
                <MyChart data={data} title={productObj.categoryItem_title} />
                {/* <img src={temp[0].img} /> */}
            </div>
        </div>
   
    </>);
}

export {Clothing}
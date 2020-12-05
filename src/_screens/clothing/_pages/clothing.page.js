import React, {useState} from 'react';
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

    const categoryObj = productCategoryObj("clothing");
    const [data, setData] = useState(clothing_productArray);

    const click = (column, item, categoryName) => {
        if (column.columnHeader_id === 5) { // in column of info 
            props.history.push({
                // categoryName: 'clothing'
                pathname: `${categoryName}/${item.productId}`,
            });
        }
    }

    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={categoryObj.categoryItem_id}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per p-5" id="mainbar">
                <PageTitle title={categoryObj.categoryItem_title} />
                <MySearchBar data={clothing_productArray} setData={setData} />
                <div className="w-75">
                    <MyTable data={data} column={column} onClick={click} title={categoryObj.categoryItem_title} widgetTitle={"لیست"} categoryObj={categoryObj} havePin={true} screenType={"product"} />
                    <MyChart data={data} title={categoryObj.categoryItem_title} categoryObj={categoryObj} havePin={true} screenType={"product"} />
                </div>
            </div>
        </div>
   
    </>);
}

export {Clothing}
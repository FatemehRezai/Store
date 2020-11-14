import React from 'react';
// import logo from '../logo.png';
import homeAppliances_productArray from '../_const/HomeAppliancesـProductSampleList.js';
import column from '../../../_const/column';
import category from '../../../_const/Category';
import { MyTable, MyResponsiveNavbar } from '../../../_components';
import { productCategoryObj } from '../../../_helpers/productCategoryObj';
import { PageTitle } from '../../../_components/index';

function HomeAppliances(props) {
    const productObj = productCategoryObj("home-appliances");

    const click = (column, item) => {
        if (column.columnHeader_id === 5) {
            props.history.push({
                // pathname: 'home-appliances' + '/' + item.productId,
                pathname: `home-appliances/${item.productId}`,
            });
        }
    }
    return <>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir=''>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={productObj.categoryItem_id} />

            {/* mainbar */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <PageTitle title={productObj.categoryItem_title} />
                <MyTable data={homeAppliances_productArray} column={column} onClick={click} title={productObj.categoryItem_title} widgetTitle={"لیست"}/>
            </div>
        </div>

    </>;
}

export { HomeAppliances }
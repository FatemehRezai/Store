import React, { useState } from 'react';
// import logo from '../logo.png';
import clothing_productArray from '../_const/ClothingـProductSampleList';
// import column from '../../../_const/column';
import factorColumn from '../_const/factorColumn';
import category from '../../../_const/Category';
import { MyTable, MyResponsiveNavbar } from '../../../_components';
import { lsJoinProductArray } from '../_helpers/lsJoinProductArray';
import { removeFactorArrayItem } from '../_contorollers/factors.contoroller';
import { TotalFactor, PrintFactor } from '../_components';

import { PageTitle } from '../../../_components/index';

function Factor(props) {
   
    const title = "فاکتور";
    let data = lsJoinProductArray();
    const [updatedData, setupdatedData] = useState();
    // console.log("ls join in factor.page", data);
    
    const click = (column, item) => {
        if (column.columnHeader_id === 0) {
            if( window.confirm("حذف شود؟") ){
                removeFactorArrayItem(item.id);
                data = lsJoinProductArray();
                setupdatedData(data);
            }
        }
    }
    // به درد نمی خوره به جای بالایی نوشته بودم دیدم اون کافیه همونو استفاده کردم
    // const updatePage = (a , b) => {
    //     console.log(a,b);
    //     setupdatedData(data);
    // }
    
    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={0}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                {/* <div className=""> */}
                    <PageTitle title={title} />
                    <MyTable data={data} column={factorColumn({onChangeHandler: setupdatedData})} onClick={click} title={title} widgetTitle={"لیست"} screenType={"factor"}  {...props}/>
                    <TotalFactor />
                    <PrintFactor/>
                {/* </div> */}
            </div>
        </div>
   
    </>);
}

export {Factor}
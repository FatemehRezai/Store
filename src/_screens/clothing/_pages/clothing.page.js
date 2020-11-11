import React from 'react';
// import logo from '../logo.png';
import clothing_productArray from '../_const/ClothingـProductSampleList';
import column from '../../../_const/column';
import category from '../../../_const/Category';
import { MyTable, MyResponsiveNavbar } from '../../../_components';

function Clothing(props) {
    const click = (column, item) => {
        if (column.columnHeader_id === 5) {
            props.history.push({
                pathname: `clothing/${item.productId}`,
            });
        }
    }

    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={2}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <MyTable data={clothing_productArray} column={column} onClick={click}/>
            </div>
        </div>
   
    </>);
}

export {Clothing}
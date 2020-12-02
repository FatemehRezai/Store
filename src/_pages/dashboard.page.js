import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import imgHome from '../_pictures/home7.gif';
import { MyChart, MyResponsiveNavbar, MyTable,  } from '../_components/index';
import { getPinArray } from '../_contorollers/pinArray.controller';
import { get } from '../_helpers/store';

import category from '../_const/Category';
import productColumn from '../_const/column'

function Dashboard(props) {
    // const [categoryName, setCategoryName] = useState("");
    // let categoryName = "";

    const pinRendrer = () => {

        const click = (column, item, categoryName) => {
            if (column.columnHeader_id === 5) { // in column of info 
                props.history.push({
                    pathname: `${categoryName}/${item.productId}`,
                });
            }
        }


        //Get Pin Array fromLocal Storage
        const pinArray = getPinArray();

        let res = [];
        res.push( pinArray.map( (pinObj, index) => {
            const key = pinObj.categoryObj.categoryItem_name + "_productArray"
            //Get product list from Local storage
            const data = get(key);
            if (pinObj.screenType === 'factor') {
                
            } else {
                switch (pinObj.type) {
                    case 'table':
                        // console.log(pinObj.column);
                        // categoryName = pinObj.categoryObj.categoryItem_name;
                        // setCategoryName(pinObj.categoryObj.categoryItem_name);
                        return <MyTable key= {index} data={data} column={productColumn} onClick={click} title={pinObj.categoryObj.categoryItem_title} widgetTitle={"لیست"} categoryObj={pinObj.categoryObj} />;
                        break;
                    case 'chart':
                        return <MyChart key= {index} data={data} title={pinObj.categoryObj.categoryItem_title} categoryObj={pinObj.categoryObj} />;
                        break;
                
                    default:
                        break;
                }
            }
            
            
        }))
        return res;
 
    }
    
    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {pinRendrer()}
                </div>
            </div>
        </div>
   
    </>);
}

withRouter(Dashboard);
export {Dashboard}
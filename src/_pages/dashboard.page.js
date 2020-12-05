import React, {useState} from 'react';
import { withRouter } from "react-router-dom";

import { MyChart, MyResponsiveNavbar, MyTable,  } from '../_components/index';
import { getPinArray } from '../_contorollers/pinArray.controller';
import { get } from '../_helpers/store';

import category from '../_const/Category';
import productColumn from '../_const/column';
import factorColumn from '../_screens/factor/_const/factorColumn'
import { lsJoinProductArray } from '../_screens/factor/_helpers/lsJoinProductArray';
import { removeFactorArrayItem } from '../_screens/factor/_contorollers/factors.contoroller';


function Dashboard(props) {
    const [updatedData, setupdatedData] = useState();

    const pinRendrer = () => {

        let data = lsJoinProductArray();
        const click = (column, item, categoryName) => {
            if (column.columnHeader_id === 5) { // info column
                props.history.push({
                    pathname: `${categoryName}/${item.productId}`,
                });
            }
            if (column.columnHeader_id === 0) {// delete column ( product table does not include )
                if( window.confirm("حذف شود؟") ){
                    removeFactorArrayItem(item.id);
                    data = lsJoinProductArray();
                    setupdatedData(data);
                }
            }
        }
        


        //Get Pin Array fromLocal Storage
        const pinArray = getPinArray();

        let res = [];
        res.push( pinArray.map( (pinObj, index) => {
            
            if (pinObj.screenType === 'factor') {
                //Get factor list 
                let data = lsJoinProductArray();
                return <>
                    <MyTable key= {index} data={data} column={factorColumn({onChangeHandler: setupdatedData})} onClick={click} title={'فاکتور'} widgetTitle={"لیست"} screenType={"factor"} haveUnPin={true} {...props} id={pinObj.id} />
                    {/* <TotalFactor/> */}
                </>
                
            } else {
                const key = pinObj.categoryObj.categoryItem_name + "_productArray"
                //Get product list from Local storage
                const data = get(key);
                switch (pinObj.type) {
                    case 'table':
                        return <MyTable key= {index} data={data} column={productColumn} onClick={click} title={pinObj.categoryObj.categoryItem_title} widgetTitle={"لیست"} categoryObj={pinObj.categoryObj} haveUnPin={true} id={pinObj.id} />;
                        break;
                    case 'chart':
                        return <MyChart key= {index} data={data} title={pinObj.categoryObj.categoryItem_title} categoryObj={pinObj.categoryObj} haveUnPin={true} id={pinObj.id} />;
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
                <div className="d-flex flex-column justify-content-center align-items-center py-5 w-75">
                    {pinRendrer()}
                </div>
            </div>
        </div>
   
    </>);
}

withRouter(Dashboard);
export {Dashboard}
import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import imgHome from '../_pictures/home7.gif';
import { MyChart, MyResponsiveNavbar, MyTable,  } from '../_components/index';
import { getPinArray } from '../_contorollers/pinArray.controller';
import { get } from '../_helpers/store';

import category from '../_const/Category';
import productColumn from '../_const/column'

function Home(props) {
    // const [categoryName, setCategoryName] = useState("");
    // let categoryName = "";

    const pinRendrer = () => {

        
 
    }
    
    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category}/>
            
            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <div>
                <img src={imgHome} alt={"gif"} className="w-100 h-100"/>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {/* {pinRendrer()} */}
                </div>
            </div>
        </div>
   
    </>);
}

withRouter(Home);
export {Home}
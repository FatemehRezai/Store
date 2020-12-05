import React from 'react';
import { withRouter } from "react-router-dom";
import imgHome from '../_pictures/home7.gif';
import { MyResponsiveNavbar } from '../_components/index';

import category from '../_const/Category';


function Home(props) {
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
            </div>
        </div>
   
    </>);
}

withRouter(Home);
export {Home}
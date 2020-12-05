import React, { useState } from 'react';
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

    // help for updating page
    const click = (column, item) => {
        if (column.columnHeader_id === 0) {
            if (window.confirm("حذف شود؟")) {
                removeFactorArrayItem(item.id);
                data = lsJoinProductArray();
                setupdatedData(data);
            }
        }
    }

    return (<>
        {/* main */}
        <div className="main px-0 d-flex bg-1" dir='rtl'>
            {/* responsive Navigation bar */}
            <MyResponsiveNavbar data={category} pageId={0} />

            {/* <!-- mainbar --> */}
            <div className="mainbar col-md-9 col-12 d-flex flex-column justify-content-center align-items-center bg-1 marginRight25per" id="mainbar">
                <PageTitle title={title} />
                <MyTable data={data} column={factorColumn({ onChangeHandler: setupdatedData })} onClick={click} title={title} widgetTitle={"لیست"} screenType={"factor"} havePin={true} {...props} />
                <TotalFactor />
                <PrintFactor />
            </div>
        </div>

    </>);
}

export { Factor }
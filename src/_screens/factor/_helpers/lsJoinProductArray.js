import { getFactorArray } from '../_contorollers/factors.contoroller';
import { productCategoryChecker } from '../../../_helpers/productCategoryChecker';

//localStorage Join ProductArray
//to make suitable data for passing to MyTable component
export function lsJoinProductArray() {
    let res = [];
    const ls = getFactorArray();

    ls.map( (value, index) => {
        let productArray = productCategoryChecker(value.productCategory);
        const isEqualId = (i) => +(i.productId) === +(value.productId);
        const indexOfproduct = productArray.findIndex(isEqualId);

        return(
            //push to result array should be in return of map
            res.push(
                {
                    id: value.id,
                    productId: value.productId,
                    quantity: value.quantity,
                    productCategory: value.productCategory,
                    title: productArray[indexOfproduct].title,
                    price: productArray[indexOfproduct].price,
                    img: productArray[indexOfproduct].img,
                }
            )
        )
    })

    return res;
}
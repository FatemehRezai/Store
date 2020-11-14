import category from "../_const/Category";


export function productCategoryObj(productCategory) {
    const isEqualId = (i) => i.categoryItem_name === productCategory;
    let productObj = category[category.findIndex(isEqualId)];
    return productObj;
}
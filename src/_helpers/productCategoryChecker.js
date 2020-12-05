import clothing_productArray from '../_screens/clothing/_const/ClothingـProductSampleList';
import fruit_productArray from '../_screens/fruit/_const/FruitـProductSampleList';
import homeAppliances_productArray from '../_screens/homeAppliances/_const/HomeAppliancesـProductSampleList';
import { get } from "./store";



export function productCategoryChecker(productCategory) {
    //get data from Local storage
    const _clothing_productArray = get("clothing_productArray");
    const _fruit_productArray = get("fruit_productArray");
    const _homeAppliances_productArray = get("home-appliances_productArray");

    let productArray=[];
    switch (productCategory) {
        case "fruit":
            productArray = _fruit_productArray || fruit_productArray;
            break;
        case "clothing":
            productArray = _clothing_productArray || clothing_productArray;
            break;
        case "home-appliances":
            productArray = _homeAppliances_productArray || homeAppliances_productArray;
            break;    
        default:
            productArray = _fruit_productArray || fruit_productArray;
            break;
    }
    return productArray;
}


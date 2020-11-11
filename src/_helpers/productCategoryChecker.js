import clothing_productArray from '../_screens/clothing/_const/ClothingـProductSampleList';
import fruit_productArray from '../_screens/fruit/_const/FruitـProductSampleList';
import homeAppliances_productArray from '../_screens/homeAppliances/_const/HomeAppliancesـProductSampleList';


export function productCategoryChecker(productCategory) {
    let productArray=[];
    switch (productCategory) {
        case "fruit":
            productArray = fruit_productArray;
            break;
        case "clothing":
            productArray = clothing_productArray;
            break;
        case "home-appliances":
            productArray = homeAppliances_productArray;
            break;    
        default:
            productArray = fruit_productArray;
            break;
    }
    return productArray;
}
import { get, set } from "./store";
import clothing_productArray from './ClothingـSampleList';
import fruit_productArray from './FruitـSampleList';
import homeAppliances_productArray from './HomeAppliancesـSampleList';
import category from "../_const/Category";
import column from "../_const/column";

export function localStorageSetter(){
    get('clothing_productArray').length === 0 && set('clothing_productArray', clothing_productArray);
    get('fruit_productArray').length === 0 && set('fruit_productArray', fruit_productArray);
    get('home-appliances_productArray').length === 0 && set('home-appliances_productArray', homeAppliances_productArray);

    get('category').length === 0 && set('category', category);
    get('column').length === 0 && set('column', column);
}



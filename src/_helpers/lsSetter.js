import { get, set } from "./store";
import clothing_productArray from './ClothingـSampleList';
import fruit_productArray from './FruitـSampleList';
import homeAppliances_productArray from './HomeAppliancesـSampleList';

export function localStorageSetter(){
    get('clothing_productArray').length === 0 && set('clothing_productArray', clothing_productArray);
    get('fruit_productArray').length === 0 && set('fruit_productArray', fruit_productArray);
    get('homeAppliances_productArray').length === 0 && set('homeAppliances_productArray', homeAppliances_productArray);
}



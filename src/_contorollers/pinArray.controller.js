import {set, get, remove, clear} from '../_helpers/store';
import PropTypes from 'prop-types';
let pinArrayKey = 'pinArray';

// setter
export const setPin = ( type, categoryObj, screenType ) => {

    ////////////
    ///check array for having empty obj or not 
    ///check for duplicate object
    ////////////


    // Get the existing data
    let exist = get(pinArrayKey);

    //create temperory pin object and push it to existing pinArray
    let tempPinObj = {
        type: type,
        categoryObj: categoryObj,
        screenType: screenType,
    }
    exist.push(tempPinObj);

    // Save back to localStorage
    set(pinArrayKey, exist);
}



// getter
export const getPinArray = () => {
    // Get the existing data
    let exist = get(pinArrayKey);
    return exist;
}

// remove by id Of Pin
// export const removePinArrayItem = (id) => {

//     // Get the existing data
//     let exist = get(pinArrayKey);
//     const isEqualId = (i) => (i.id) === (id); // id may be string or number
//     const indexOfFactor = exist.findIndex(isEqualId);
    
//     //handle probability error by checking product is empty or not
//     if (indexOfFactor > -1) {
//         exist.splice(indexOfFactor, 1);
//         // Save back to localStorage 
//         set(pinArrayKey, exist); 
//     } else {
//         console.log("Items of Pin dosn't exist!");
//         return 0;
//     }
// }


// remove
export const removePinArray = () => {
    remove(pinArrayKey);
}

// remove all
export function clearPinArray() {
    clear();
}






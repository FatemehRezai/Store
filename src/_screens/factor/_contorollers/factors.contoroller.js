import {set, get, remove, clear} from '../../../_helpers/store';

let factorArrayKey = 'factorArray';

// setter
export const setFactor = (productId , quantity, productCategory) => {

    ////////////
    ///check array for having empty obj or not 
    ////////////

    // Get the existing data
    let exist = get(factorArrayKey);
    const isEqualId = (i) => +(i.productId) === +(productId); 
    const indexOfFactor = exist.findIndex(isEqualId);

    // const existence = exist[indexOfFactor];
    // console.log(existence, "           ",productId, quantity);
    
    if (indexOfFactor > -1) {

        exist[indexOfFactor].quantity = quantity;
    } else {
        // Add new data to localStorage Array
        let factorItemId = productId.toString() + "_" + productCategory.toString();
        let temp = { id: factorItemId, productId: productId, quantity: quantity, productCategory: productCategory };
        exist.push(temp);
    }

    // Save back to localStorage
    set(factorArrayKey, exist);
}

// getter
export const getFactorArray = () => {
    // Get the existing data
    let exist = get(factorArrayKey);
    return exist;
}

// remove by id Of Factor
export const removeFactorArrayItem = (id) => {

    // Get the existing data
    let exist = get(factorArrayKey);
    const isEqualId = (i) => (i.id) === (id); // id may be string or number
    const indexOfFactor = exist.findIndex(isEqualId);
    
    //handle probability error by checking product is empty or not
    if (indexOfFactor > -1) {
        exist.splice(indexOfFactor, 1);
        // Save back to localStorage 
        set(factorArrayKey, exist); 
    } else {
        console.log("Items of Factor dosn't exist!");
        return 0;
    }
}


// remove
export const removeFactorArray = () => {//////////////need to change remove by idOfFactor
    remove(factorArrayKey);
}

// remove all
export function clearFactorArray() {
    clear();
}






















// // setter
// export const setFactor = (id , quantity) => {////////!!!!!!!!!!!!!

//     ////////////
//     ///check array for having empty obj or not 
//     ////////////

//     // Get the existing data
//     let exist = get(factorArrayKey);

//     // Add new data to localStorage Array
//     let temp = {id:id, quantity:quantity};
//     exist.push(temp);

//     // Save back to localStorage
//     set(factorArrayKey, exist);
// }

// // Get the existing data 
// let exist = get(factorArrayKey);
// const isEqualId = (i) => i.id === +id; 
// const existence = exist[exist.findIndex(isEqualId)];//its better write it with find and handle probability error by checking product is empty or not 
// // let idOfFactor = existence? existence : exist.size() + 1;
// if (existence > -1) {
//     //Get current quantity of Factor Item 
//     quantityOfFactor = exist[existence].quantity; 
//     // Add new data to localStorage Array 
//     let temp = { id:id, quantity:(quantity + quantityOfFactor)};////!!!!!!!!!!! exist. exist.push(temp);
// } else { }
//  // Add new data to localStorage Array 
//  let temp = {id:id, quantity:quantity};////!!!!!!!!!!! 
//  exist.push(temp);
//  // Save back to localStorage 
//  set(factorArrayKey, exist);















// export default {
//     setFactor,
//     getFactorArray,
//     removeFactorArray,
//     clearFactorArray

// }




// let factorArrayValue = JSON.stringify(factorArray);

// // setter
// let set = (factorArrayKey, factorArrayValue) => {

//     // Get the existing data
//     let exist = get(factorArrayKey);

//     // If no existing data, create an array
//     // Otherwise, convert the localStorage string to an array
//     exist = exist? exist.split(',') : [];
    

//     // Add new data to localStorage Array
//     exist.push(factorArrayValue);

//     // Save back to localStorage
//     set(factorArrayKey, existing.toString());

// }
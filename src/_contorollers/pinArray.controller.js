import {set, get, remove, clear} from '../_helpers/store';
import PropTypes from 'prop-types';
let pinArrayKey = 'pinArray';

//create unique id  
//something like: "ec0c22fa-f909-48da-92cb-db17ecdb91c5"
function createUniqueId() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
}


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
        id: createUniqueId(), 
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

//remove by id from Pin
export const removePinArrayItem = (id) => {

    // Get the existing data
    let exist = get(pinArrayKey);
    const isEqualId = (i) => (i.id) === (id); // id may be string or number
    const indexOfPin = exist.findIndex(isEqualId);
    
    //handle probability error by checking product is empty or not
    if (indexOfPin > -1) {
        exist.splice(indexOfPin, 1);
        // Save back to localStorage 
        set(pinArrayKey, exist); 

        /////////////////////////////
        // const slideDown = elem => elem.style.height = `${elem.scrollHeight}px`;
        // const slideDown = elem => elem.style.height = `0px`;
        // const slideDown = (element) => {
        //     // element.style.height = '0px';
        //     // element.style.transition = "height 10s ease-out";
        //     element.style.animation = "fadeOut 1s ease-in";
        // }
        // slideDown(document.getElementById(id));
        const displayNone = (element) => {
            element.style.height = element.offsetHeight+'px';
            window.setTimeout(()=> element.style.height = '0px', 100);
            // window.setTimeout(()=> element.style.display= "none", 1000);
        }
        displayNone(document.getElementById(id));
        ///////////////////////////////////////////////


    } else {
        console.log("Items of Pin dosn't exist!");
        return 0;
    }
}


// remove
export const removePinArray = () => {
    remove(pinArrayKey);
}

// remove all
export function clearPinArray() {
    clear();
}






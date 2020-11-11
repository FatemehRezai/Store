// setter
export function set(key='' , value=[]) {
   localStorage.setItem(key, JSON.stringify(value));
}

// getter
export function get(key='') {
    let v = localStorage.getItem(key);
    return v? JSON.parse(v): [];
}

// remove
export function remove(key='') {
    localStorage.removeItem(key);
}

// remove all
export function clear() {
    localStorage.clear();
}















// export default {
//     set,
//     get,
//     remove,
//     clear
// }


// let set = (factorArrayKey, factorArrayValue) => {
    //     // Get the existing data
    //     let existing = localStorage.getItem(factorArrayKey);

    //     // If no existing data, create an array
    //     // Otherwise, convert the localStorage string to an array
    //     existing = existing ? existing.split(',') : [];

    //     // Add new data to localStorage Array
    //     existing.push(factorArrayValue);

    //     // Save back to localStorage
    //     localStorage.setItem(factorArrayKey, existing.toString());

    // }

//   // setter
//   localStorage.setItem('myData', data);
//   // getter
//   localStorage.getItem('myData');
//   // remove
//   localStorage.removeItem('myData');
//   // remove all
//   localStorage.clear();

   // let factorArray = [];
    // let factorArrayKey = 'factorArray';
    // let factorArrayValue = JSON.stringify(factorArray);

    // localStorage.setItem(factorArrayKey, factorArrayValue);  
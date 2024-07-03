// Please write a utility function that we can use to both
// reverse someone's last name and prepend their preferred
// salutation

// Inputs
// Outputs
// Processing

/**
 * Inputs -> 2 inputs and they are both strings
 * @param {string} lastName
 * @param {string} salutation
 * 
 * Output -> 
 * 
 * @return {string} -> Salutation and reversed last name
 */


// const formatName = (lastName, salutation) => { //1. Inputs

//     //3. Processing
//     // Lowercase all the letters -> Bean -> bean
//     let lowercaseLastName = lastName.toLowerCase();
//     // Reverse the last name -> naeb -> naeb
//     let reversedLastName = lowercaseLastName.split('').reverse().join('');
//     // Capturing only the first element
//     // reversedLastName[0].toUpperCase();
//     // reversedLastName.join('');
//     // reversedLastName = reversedLastName[0].toUpperCase() + reversedLastName.slice(1);
//     // Capitalize the first letter -> naeb -> Naeb
//     reversedLastName = reversedLastName.charAt(0).toUpperCase() + reversedLastName.slice(1);
//         // We can use reverse(), but reverse only works on arrays
//         // Use split() to convert the string into an array, and then reverse the array using reverse()
//         // How do we conver this back -> With join
//         // Add period to the end of the salutation -> Mr -> Mr.
//     const updatedSalutation = salutation + '.';
//         // Join both strings together -> Mr. Naeb
//     const output = updatedSalutation +' ' + reversedLastName;
//     //2. Output
//     return output;
// }
function formatName(lastName, salutation) {
    // Reverse the last name
    const reversedLastName = lastName.split('').reverse().join('');
    // Format the name with salutation
    return `${salutation}. ${reversedLastName}`;
  }

console.log(formatName('Quinn',  'Mx'));   // Mx. Nniuq
console.log(formatName('Bean',   'Mr'));   // Mr. Naeb
console.log(formatName('Clause', 'Mrs'));  // Mrs. Esualc
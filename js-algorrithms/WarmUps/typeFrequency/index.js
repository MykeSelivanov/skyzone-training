// solution 1
// function typeFreq(arr){

//     if (arr.length === 0) return -1;

//     let Types = {
//     number: 0,
//     string: 0,
//     boolean: 0,
//     object: 0,
//     null: 0,
//     undefined: 0
//     }
    
//     arr.forEach( element => {
//       if (element === null) Types.null += 1;
//         switch (typeof element) {
//           case 'number': Types.number += 1;
//         break;
//         case 'string': Types.string += 1;
//         break;
//             case 'boolean': Types.boolean += 1;
//         break;
//         case 'object': Types.object += 1;
//         break;
//         default: Types.undefined += 1;
//         break;
//             }
//         });
//     return Types;
// }
    
typeFreq([1,2,3,'asd', {}, null, undefined, true, false, 1, 2, 4]);
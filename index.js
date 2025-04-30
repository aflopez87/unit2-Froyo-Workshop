// a visitor receives a prompt to enter a list of comma-separated froyo flavors
// they type `vanilla,vanilla,vanilla,strawberry,coffee,coffee`
// In the browser console, they are able to see how many of each flavor they have ordered
// const userInputString = prompt(
//     "Please enter a flavors for your froyo order.",
//     "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
//   );

// // convert prompt string separated by commas to array, trims spaces from the front of of each string after each comma
// const orderArr = userInputString.split(",").map(flavor => flavor.trim());
// // they observe that they have ordered three vanilla, two coffee, and one strawberry
// console.log(orderArr)

// // function for creating object of the number of flavors in an empty object
// const createObject = (arr)=>{
//     // create an empty object to hold array properties
//     const emptyObject = {}
//     // build a for loop
//     for (let i=0; i<arr.length; i++){
//         const eachFlavor = arr[i]
//         const currentObjectKeys = Object.keys(emptyObject)
//         if (currentObjectKeys.includes(eachFlavor)){
//             emptyObject[eachFlavor] ++
//         }else{
//             emptyObject[eachFlavor] = 1
//         }
//     // inside our for loop we will need to populate an object
//     // create a property in the object for the item in thearray and give ia value of 1
//     // if a properties appears more than once instead of creating a new property add 1 to the value already there
//     }
//     return emptyObject
// }
// console.log(createObject(orderArr))

//////  Alternative Solution using Object Keys //////
function froyoFlavors(){
    let userInputString = prompt(
        "Please enter a flavors for your froyo order.",
        "vanilla, vanilla, vanilla, strawberry, coffee, coffee")
    let arrFlavor = userInputString.split(",").map(flavor => flavor.trim())

    let flavorCount = {};
    for (let flavor of arrFlavor){
        if (flavorCount[flavor]){
            flavorCount[flavor]++;
        }else {
            flavorCount[flavor] = 1;
        }
    }
    return flavorCount
}

const result = froyoFlavors();
console.log("Summary of order:", result);


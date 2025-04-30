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
// creates function for expressing number of times a flavor input is added
function froyoFlavors(){
    // Prompt with a pre-established array of flavors
    let userInputString = prompt(
        "Please enter a flavors for your froyo order.",
        "vanilla, vanilla, vanilla, strawberry, coffee, coffee")
    // Takes the input string and separates by comma mapping and trimming the space between commas and flavors and sets to arrFlavor array
    let arrFlavor = userInputString.split(",").map(flavor => flavor.trim())
    
    // Creates and empty object called flavorCount
    let flavorCount = {};
    // For loop using object keys to identify each key as flavor in the arrFkavor array
    for (let flavor of arrFlavor){
    // Each time a flavor is counted in the input,, adds the flavor to the empty array and a ticker that increases by 1 for each instance of that flavor
        if (flavorCount[flavor]){
            flavorCount[flavor]++;
    // If the flavor counted is different, maintains adds the flavor but keeps the ticker count to 1
        }else {
            flavorCount[flavor] = 1;
        }
    }
    // Returns the data from the loop
    return flavorCount
}

// Saves the output of the froyoFlavors() function as the variable result
const result = froyoFlavors();
// Prints to console the different flavors and the number of flavors ordered
console.log("Summary of order:", result);


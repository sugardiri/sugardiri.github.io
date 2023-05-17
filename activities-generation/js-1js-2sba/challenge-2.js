// Below are the items available for sale at a local computer store:

// computer = $500
// mouse = $10
// tablet = $250
// case = $25
// router = $100

// Write a function called itemPrice that is defined with 1 parameter: item
// The function will use a switch statement to return the price of the item passed in.
// Check to make sure that all arguments passed in are of data type string
// If an argument is not of data type string, a message should be logged to the console informing the user that all entries must be of type string.
// If the item passed into the function is not in the store, then a statement informing the user of this should be logged to the console.

// For Example:

// itemPrice(“case”) should return the string $25.

const itemPrice = function(item){
    if (typeof item !== "string"){
        return "All entries must be a string"
    }

    let cost = ""
    switch(item){
        case "computer":
            cost ="$500";
            break;
        case "mouse":
            cost ="$10";
            break;
        case "tablet":
            cost ="$250";
            break;
        case "case":
            cost ="$25";
            break;
        case "router":
                cost ="$100";
                break;
            default:
                return "That item is not available";

    }

    return cost;
}

let output = itemPrice("ROUTER")

console.log(output);
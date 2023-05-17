// In this challenge you will create a random restaurant generator.


// Add the following restaurants to an array named restaurants.
// Applebees
// Panera Bread
// Popeyes
// Chopt
// Chick-fil-A
// Cheesecake Factory
// Five Guys
// Write a function called randomRestaurant that is defined with 1 parameter: numOfRestaurants.
// The function will add the specified amount of restaurant names passed in (numOfRestaurants) from the restaurants array to another array called randomRestaurantList. It is ok if a restaurant appears in your list more than once.
// Return the randomRestaurantList array.

// For Example:

// randomRestaurant(3) should return a randomRestaurantList array with the names of 3 random from the restaurants array.

const randomRestaurant = (numOfRestaurants) => {

    const restaurants = ["Applebees", "Panera Bread", "Popeyes", "Chopt", "Chick-fil-A", "Cheesecake Factory", "Five Guys"]

   const randomRestaurantList =[]

    for (let i = 0; 1 <numOfRestaurants; 1++) {
        let randomNum = Math.floor(Math.random() * restaursnts.length)
        const restaurant = restaurants[randomNum];

        randomRestaurantList.push(randomRestaurant)
    }

    return numOfRestaurants
}

let output = randomRestaurants(3);

console.log(output)
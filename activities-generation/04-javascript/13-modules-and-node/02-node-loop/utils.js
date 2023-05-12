// create a function that has one parameter
// The parameter will be an array of strings
// create a loop inside the function that prints each string to the terminal


const person = (name) => {
    for (let i = 0; i < 4; i++) {
    console.log(`Hi! My name is ${name[i]}!`) 
}
}

module.exports = { person }









// export your function
// AN API IS A PROGRAM THAT SOMEONE BUILT TO HANDLE REQUESTS

// A FETCH REQUEST RETURNS A PROMISE

fetch("https://reqres.in/api/users")
// handle initial response
.then(response => {
    // the first .then() checks if the response is good
    console.log(response)
    if(response.status === 200){
        // response.json() gives us the data in a format we can work with
        return response.json()
    } 
})
// we get access to the data in the next .then() statement
.then( users => {
    // here is where we can actually do something with the data for our application
    console.log(users.data)
})

// .then() handles our promises


//EXTRA NOTES

//fetch("https://reqres.in/api/users").then(response => {console.log(promise)})


//.then() handles the response from the fetch request

//fetch("https://reqres.in/api/users")
//.then(response => {
    //console.log(response)
    //let data = response.json();
    //console.log(data)
//})
//Set initial image

let starter = document.getElementById("starter");

//Set rest of images in array
let heartArray = ["assets/Asset20.png", "assets/Asset21.png", "assets/Asset22.png", "assets/Asset23.png", "assets/Asset24.png", "assets/Asset25.png", "assets/Asset26.png", "assets/Asset27.png",]

//set a counter variable
let count = 0;

function animate () {
    //select initial image
    starter.src = heartArray[count];
    //increment through array
    count++;
    //increase couny yhtough full lenghts of array
    if (heartArray.length == count) {
        //reset and start over
        count = 0;
    }
}


setInterval(animate,100)

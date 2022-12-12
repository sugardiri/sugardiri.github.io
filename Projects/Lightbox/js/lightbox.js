//Variable for lightbox elements
let lightboxContainer = document.getElementById('lightboxContainer');
let lightboxBackground = document.getElementById('lightboxBackground');
let lightbox = document.getElementById('lightbox');
let lightboxCloser = document.getElementById('lightboxCloser');

//Function to open lightbox
function openLightbox(){
//turn on display class (from displays:none to display:flex)
lightboxContainer.classList.add('display');
//Display image scr inside lightbox
lightbox.src = this.src;
}

//set single variable to get all images from gallery
let galleryImages = document.getElementsByClassName("galleryImage");

//Create loop to cycle through images and run onclick event per image
for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
}

//Creat variable for image class
//let coffeeImage = document.getElementById ('coffeeImage1');

//When you click image, reference openLightBox function 
//coffeeImage.oneclick = openLightbox;

//Make function to make closer clickable
function closeLightbox() {
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}

let closers = document.getElementsByClassName('closer');

for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}

//lightboxCloser.onclick = closeLightbox;
//lightboxBackground.onclick = closeLightbox;







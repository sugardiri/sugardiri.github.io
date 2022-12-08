//Variable for lightbox elements
let lightboxContainer = document.getElementById ('lightboxContainer');
let lightboxContainer = document.getElementById ('lightboxBackground');
let lightbox = document.getElementbyId ('lightbox');
let lightbox = document.getElementId ('lightboxCloser');

//Function to open lightbox
function openLightbox(){
//turn on display class (from displays:none to display:flex)
lightboxContainer.classList.add('display');
//Display image scr inside lightbox
lightbox.scr = this.scr;
}

let coffeeImage = document.getElementById ('coffeeImage1');

//When you click image, reference openLightBox function 
coffeeImage.oneclick = openLightbox;

//Make function to make closer clickable
function closeLightbox () {
    lightboxContainer.classList.remove ('display');
    lightbox.scr = ""
}

lightboxCloser.oneclick = closeLightbox;
lightboxBackground.oneclick = closeLightbox;







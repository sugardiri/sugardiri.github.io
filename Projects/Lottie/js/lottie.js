//console.log ("hello")

//Get Animation Container

let animationMonster = document.getElementById("animationMonster");

//Get Monster from Lottie
let monster =
        bodymovin.loadAnimation({
              container: animationMonster,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: "https://lottie.host/39df02cb-0ab8-480a-813c-b5bd4881c785/3C9mf784jr.json",
            });

//Monster emotes with event listeners

//Play excited frames

animationMonster.addEventListener('click', function() {
    monster.playSegments([170,210])
})

//Play scared frames

animationMonster.addEventListener('mouseenter', function() {
    monster.playSegments([49,61])
})

//Play shrug shoulder frames

animationMonster.addEventListener('mouseleave', function() {
    monster.playSegments([268,283])
})






//Get Animation Container 2

let animationToggle = document.getElementById("animationToggle");

//Get Toggle from Lottie

let toggle = 
bodymovin.loadAnimation({
    container: animationToggle,
    renderer: 'svg',
    loop:false,
    autoplay: false,
    path: "https://lottie.host/b96f1a37-5355-4bbd-aa72-0af0f074dfcf/vmaiIJAuDB.json",
  });

  //Toggle from one side
  animationToggle.addEventListener('click',function(){
if (toggle == 0) {
    toggle.playSegments([1,20], true);
    toggle = toggle +1;
} else {
    toggle.playSegments([21,60], true);
    let toggle_c =0;
}
})









//Get Animation Container 3

let animationChick = document.getElementById("chickanimation");

//Get Chick from Lottie
let chick =
        bodymovin.loadAnimation({
              container: animationChick,
              renderer: 'svg',
              loop: false,
              autoplay: false,
              path: "https://lottie.host/6a91d1f7-8442-45ff-b8a7-34972b9d1a58/dZik0wX3ky.json",
            });

//Chick with event listeners

animationChick.addEventListener('click', function() {
    chick.playSegments([95,110])
})


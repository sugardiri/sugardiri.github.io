//console.log ("hello")

//Get Animation Container

let animationMonster = document.getElementById("animationMonster");

//Get Monster from Lottie
let monster =
        bodymovin.loadAnimation({
              container: animationMonster,
              renderer: 'svg',
              loop: true,
              autoplay: true,
              path: "https://lottie.host/39df02cb-0ab8-480a-813c-b5bd4881c785/3C9mf784jr.json",
            });

//Monster emotes with event listeners

//Play excited frames

animationMonster.addEventListener('click', function() {
    monster.playSegments([110,210])
})
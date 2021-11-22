let granimInstance = new Granim({
    element: "#canvas-image-blending",
    direction: "top-bottom",
    isPausedWhenNotInView: true,
    image: {
        source: "/img/img.jpg",
        blendingMode: "multiply",
        stretchMode: ["stretch", "stretch-if-bigger"]
    },
    states: {
        "default-state": {
            gradients: [
                ['#DAE2F8', '#DAE2F8']
            ],
            transitionSpeed: 4000,
            loop: false
        },
        "evening-state": {
            gradients : [
                ['#eb8c4d', '#f0cbff']
            ],
            transitionSpeed : 4000,
            loop: false
        },
        "dark-state": {
            gradients : [
                ['#0F2027', '#8E9EAB']
            ],
            transitionSpeed: 4000,
            loop: false
        }
    }
});

const heading = document.querySelector(".container h1");
const morning = document.getElementById("morning");
const evening = document.getElementById("evening");
const night = document.getElementById("night");

// onclick morning
morning.addEventListener("click", function(event){
    granimInstance.changeState('default-state');
    heading.innerHTML = "Bom dia!";
});

// onclick evening
evening.addEventListener("click", function(event){
    granimInstance.changeState('evening-state');
    heading.innerHTML = "Boa tarde!";
});

night.addEventListener("click", function(event){
    granimInstance.changeState('dark-state');
    heading.innerHTML = "Boa noite!";
});
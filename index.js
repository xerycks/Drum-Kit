var audio6 = new Audio('./sounds/crash.mp3')
var audio1 = new Audio('./sounds/kick-bass.mp3')
var audio7 = new Audio('./sounds/snare.mp3')
var audio2 = new Audio('./sounds/tom-1.mp3')
var audio3 = new Audio('./sounds/tom-2.mp3')
var audio4 = new Audio('./sounds/tom-3.mp3')
var audio5 = new Audio('./sounds/tom-4.mp3')

document.addEventListener("keypress", function () {
    makeSound(event.key);
    buttonClicked(event.key)
})

for (var i = 0; i < 8; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var sound = this;

        makeSound(sound.innerHTML);
        buttonClicked(sound.innerHTML);
    })
}

function makeSound(key) {

    switch (key) {
        case "w":
            audio1.play();
            break;

        case "a":
            audio2.play();
            break;
        case "s":
            audio3.play();
            break;
        case "d":
            audio4.play();
            break;
        case "j":
            audio5.play();
            break;
        case "k":
            audio6.play();
            break;
        case "l":
            audio7.play();
            break;
        default:

    }
}

function buttonClicked(btn) {

    var activeButton = document.querySelector("." + btn);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100)
}
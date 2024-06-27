// Add click event listeners to all drum buttons
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML.toLowerCase();
        makeSound(buttonInnerHTML);
        highlight(buttonInnerHTML);
    });
}

// Function to play sound based on key
function makeSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log("Invalid key pressed: " + key);
    }
}

// Function to add and remove highlight effect
function highlight(key) {
    var activeButton = document.querySelector("." + key);
    console.log("Highlighting key: " + key); // Debugging line
    if (activeButton) {
        activeButton.classList.add("pressed", "scaled-down");
        setTimeout(function() {
            activeButton.classList.remove("pressed", "scaled-down");
        }, 100); // Duration matches the CSS transition
    } else {
        console.log("No button found for key: " + key); // Debugging line
    }
}

// Add keydown event listener
document.addEventListener("keydown", function(event) {
    var key = event.key.toLowerCase();
    console.log("Key pressed: " + key); // Debugging line
    makeSound(key);
    highlight(key);
});

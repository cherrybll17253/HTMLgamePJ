var character = document.getElementById("character");
var interval;
var bothL = 0;
var bothT = 0;

function moveLeft(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft > 0){
        character.style.left = characterLeft - characterSpeed + "px";
    }

}
function moveRight(){
    var characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(characterLeft < gameWidth){
        character.style.left = characterLeft + characterSpeed + "px";
    }

}
function moveUp(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(characterTop > gameTop){
        character.style.top = characterTop - characterSpeed + "px";
    }

}
function moveDown(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(characterTop < gameHeight + gameTop){
        character.style.top = characterTop + characterSpeed + "px";
    }

}

document.addEventListener("keydown", event => {
    if(bothL == 0){
        bothL++;
        if(event.key === "ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key === "ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
    }
    if(bothT == 0){
        bothT++;
        if(event.key === "ArrowUp"){
            interval = setInterval(moveUp, 1);
        }
        if(event.key === "ArrowDown"){
            interval = setInterval(moveDown, 1);
        }
    }
})

document.addEventListener("keyup", event => {
    clearInterval(interval)
    bothL = 0
    bothT = 0
})
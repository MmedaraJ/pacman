var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,2,1,1,1,1,1,1,2],
    [2,1,2,1,1,1,1,2,1,2],
    [2,1,2,1,1,1,1,2,1,2],
    [2,1,2,2,2,2,1,1,1,2],
    [2,1,1,1,1,2,1,1,1,2],
    [2,2,1,1,1,2,1,1,1,2],
    [2,1,1,1,1,2,2,1,1,2],
    [2,1,1,1,1,1,1,1,2,2],
    [2,2,2,2,2,2,2,2,2,2]
];

var pacman = {
    x: 3,
    y: 1,
    z: 2
};

var score = 0;
var level = 1;

function displayWorld(){
    displayPacman()
    var output = '';
    for(var i=0; i<world.length; i++){
        output += "<div class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 2) output += "<div class='brick'></div>";
            if(world[i][j] == 1) output += "<div class='coin'></div>";
            if(world[i][j] == 0) output += "<div class='empty'></div>";
        }
        output += "</div>";
    }
    document.getElementById('world').innerHTML = output;
}

function displayPacman(){
    document.getElementById('pacman').style.top = pacman.y*20 + "px";
    document.getElementById('pacman').style.left = pacman.x*20 + "px";
}

function displayScore(){
    score++;
    document.getElementById("score").textContent = "Score: " + score;
}

document.onkeydown = function(e){
    if(e.keyCode == 39 && world[pacman.y][pacman.x+1] != 2) console.log("x: " + pacman.x++) //right
    if(e.keyCode == 37 && world[pacman.y][pacman.x-1] != 2) console.log("x: " + pacman.x--) //left
    if(e.keyCode == 40 && world[pacman.y+1][pacman.x] != 2) console.log("y: " + pacman.y++) //down
    if(e.keyCode == 38 && world[pacman.y-1][pacman.x] != 2) console.log("y: " + pacman.y--) //up

    if(world[pacman.y][pacman.x] == 1) {
        world[pacman.y][pacman.x] = 0;
        displayWorld();
        displayScore();
    }
    displayPacman();
    console.log(e.key + " " + e.keyCode);
}

/**
 * Group 3 Assignment 1
 * Simple Canvas Game
 * Chunxiao Li, Perlanie Panganiban, Don Miguel
 */

//Constants
BG_IMG_SRC = "images/background.png";
HERO_IMG_SRC = "images/hoang.png";
MONSTER_IMG_SRC = "images/monster.png";
SIZE = 40;
MOUSE_AREA = 10;
BG_SOUND = "sound/pacman.wav";
HIT_SOUND = "sound/scream.mp3";

// Create the canvas
var canvas = document.createElement("canvas");
canvas.setAttribute("draggable", "true");
var ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth / 2;
    canvas.height = window.innerHeight / 2;
}

resizeCanvas();
document.body.appendChild(canvas);

// Sounds
var sound = new Audio(BG_SOUND);
var hitsound = new Audio(HIT_SOUND);

// Background Image
var bgReady = false;
var bgImage = new Image();

// Hero Image
var heroReady = false;
var heroImage = new Image();

// Monster image
var monsterReady = false;
var monsterImage = new Image();

var monstersCaught = localStorage.getItem('localmonstersCaught') || 0;

function loadImage(image, imageReady, imageSrc) {
    image.onload = function () {
        imageReady = true;
    };
    image.src = imageSrc;
}

// Game objects
var monsterArray = [];
var hero = {
    x: canvas.width / 2,
    y: canvas.height / 2
};

var flag = {};
var mouseCoords = {
    mouseX: undefined,
    mouseY: undefined
};

function Monster(x, y, speed, direction) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.direction = direction;
    this.hit = function hit() {
        return(hero.x <= (this.x + SIZE)
            && this.x <= (hero.x + SIZE)
            && hero.y <= (this.y + SIZE)
            && this.y <= (hero.y + SIZE));
    };
    this.collide = function collide() {
        return(this.x <= 0  					//collide left
            || this.y <= 0							//collide top
            || (canvas.width - SIZE) <= this.x 	//collide right
            || (canvas.height - SIZE) <= this.y	//collide bottom
            );
    }
}

function changeDirection(i) {
    var tempo = monsterArray[i];
    if (tempo.y <= 0 || (canvas.height - SIZE) <= tempo.y) {
        if (0 <= tempo.direction && tempo.direction < 180) {
            monsterArray[i].direction = 180 - tempo.direction;
        }
        else {
            monsterArray[i].direction = 540 - tempo.direction;
        }
    } //collide top or bottom
    else {
        monsterArray[i].direction = 360 - tempo.direction;
    } //collide right or left
}

function deleteMonster(i) {
    monsterArray.splice(i, 1);
    monstersCaught++;
    localStorage.setItem('localmonstersCaught', monstersCaught);
}

/*======================================================================
 spawnMonsters: monster objects holds each monster and its characteristics
 =========================================================================*/
function spawnMonsters() {
    //randomly gets the monsters x and y position and direction
    var x = SIZE + (Math.random() * (canvas.width - SIZE*2));
    var y = SIZE + (Math.random() * (canvas.height - SIZE*2));
    var speed = Math.random() + 0.5;
    var dir = Math.random() * 360;
    monsterArray.push(new Monster(x, y, speed, dir)); //adds a new monster to the array
}

/*======================================================================
 drawMonsters: monster objects holds each monster and its characteristics
 =========================================================================*/
function drawMonsters() {
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(heroImage, hero.x, hero.y, SIZE, SIZE);
    for (var i = 0; i <= monsterArray.length - 1; i++) {

        if (monsterArray[i].collide()) {
            changeDirection(i);
            moveMonster(i);
            ctx.drawImage(monsterImage, monsterArray[i].x, monsterArray[i].y, SIZE, SIZE);
        }
        else if (monsterArray[i].hit()) {
            deleteMonster(i);
            if (i != 0) {
                i--;
            }
            hitsound.play();
        }
        else {
            moveMonster(i);
            ctx.drawImage(monsterImage, monsterArray[i].x, monsterArray[i].y, SIZE, SIZE);
        }
    }

    // Score
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
}

function moveMonster(i) {
    if (0 <= monsterArray[i].direction && monsterArray[i].direction < 90) {
        monsterArray[i].x = monsterArray[i].x + Math.abs(Math.sin(monsterArray[i].direction)) * monsterArray[i].speed;
        monsterArray[i].y = monsterArray[i].y - Math.abs(Math.cos(monsterArray[i].direction)) * monsterArray[i].speed;
    }
    else if (90 <= monsterArray[i].direction && monsterArray[i].direction < 180) {
        monsterArray[i].x = monsterArray[i].x + Math.abs(Math.sin(180 - monsterArray[i].direction)) * monsterArray[i].speed;
        monsterArray[i].y = monsterArray[i].y + Math.abs(Math.cos(180 - monsterArray[i].direction)) * monsterArray[i].speed;
    }
    else if (180 <= monsterArray[i].direction && monsterArray[i].direction < 270) {
        monsterArray[i].x = monsterArray[i].x - Math.abs(Math.sin(monsterArray[i].direction - 180)) * monsterArray[i].speed;
        monsterArray[i].y = monsterArray[i].y + Math.abs(Math.cos(monsterArray[i].direction - 180)) * monsterArray[i].speed;
    }
    else {
        monsterArray[i].x = monsterArray[i].x - Math.abs(Math.sin(360 - monsterArray[i].direction)) * monsterArray[i].speed;
        monsterArray[i].y = monsterArray[i].y - Math.abs(Math.cos(360 - monsterArray[i].direction)) * monsterArray[i].speed;
    }
}

function registerListeners() {
    window.addEventListener('resize', resizeCanvas, false);

    sound.addEventListener('ended', function () {
        sound.currentTime = 0;
        sound.play();
    }, false);

    addEventListener("drag", function (event) {
    }, false);

    addEventListener("dragleave", function (event) {
    }, false);

    addEventListener("drop", function (event) {
        event.preventDefault();
    }, false);

    addEventListener("dragstart", function (event) {
        if (hero.x <= event.pageX && hero.x + SIZE >= event.pageX
            && hero.y <= event.pageY && hero.y + SIZE >= event.pageY) {
            flag[1] = true;
        }
    }, false);

    addEventListener("dragover", function (event) {
        mouseCoords.mouseX = event.pageX;
        mouseCoords.mouseY = event.pageY;
        event.preventDefault();
    }, false);

    addEventListener("dragend", function () {
        delete flag[1];
    }, false);
}

// Update game objects
var counter = 0;
var update = function () {
    if (1 in flag) {
        hero.x = mouseCoords.mouseX - SIZE / 2;
        hero.y = mouseCoords.mouseY - SIZE / 2;

        //prevent hero from going out of screen
        if (mouseCoords.mouseX >= canvas.width - MOUSE_AREA) {
            hero.x = canvas.width - SIZE;
        }
        if (mouseCoords.mouseX <= MOUSE_AREA) {
            hero.x = 0;
        }
        if (mouseCoords.mouseY <= MOUSE_AREA) {
            hero.y = 0;
        }
        if (mouseCoords.mouseY >= canvas.height - MOUSE_AREA) {
            hero.y = canvas.height - SIZE;
        }
    }
    if (counter == 300) {
        spawnMonsters();
        counter = 0;
    }
    drawMonsters();
    counter++;
};

// The main game loop
var main = function () {
    update();
};

// Let's play this game!
loadImage(bgImage, bgReady, BG_IMG_SRC);
loadImage(heroImage, heroReady, HERO_IMG_SRC);
loadImage(monsterImage, monsterReady, MONSTER_IMG_SRC);
registerListeners();
sound.play();
spawnMonsters();
setInterval(main, 1); // Execute as fast as possible
const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;
    Events = Matter.Events;

// create an engine / renderer
const engine = Engine.create();
const render = Render.create({
    element: document.getElementById('can'),
    engine: engine,
    options: {
        height: 800,
        wireframes: false,
    }
});

// create flanges
const fOptions = {
    isStatic: true,
    render: {
        fillStyle: '#FF3334',
    }
};

const otherOptions = {
    isStatic: true,
    render: {
        fillStyle: '#FFBBC1',
    }
};

const flanges = [
    //ROW 0
        Bodies.circle(80,140,14,otherOptions),
        Bodies.circle(160,140,14,otherOptions),
        Bodies.circle(240,140,14,otherOptions),
        Bodies.circle(320,140,14,otherOptions),
        Bodies.circle(400,140,14,otherOptions),
        Bodies.circle(480,140,14,otherOptions),
        Bodies.circle(560,140,14,otherOptions),
        Bodies.circle(640,140,14,otherOptions),
        Bodies.circle(720,140,14,otherOptions),
    
    //ROW 1
        Bodies.circle(40,180,14,otherOptions),
        Bodies.circle(120,180,14,otherOptions),
        Bodies.circle(200,180,14,fOptions,),
        Bodies.circle(280,180,14,fOptions),
        Bodies.circle(360,180,14,otherOptions),
        Bodies.circle(440,180,14,otherOptions),
        Bodies.circle(520,180,14,fOptions),
        Bodies.circle(600,180,14,fOptions),
        Bodies.circle(680,180,14,otherOptions),
        Bodies.circle(760,180,14,otherOptions),
    
    //ROW 2
        Bodies.circle(80,220,14,otherOptions),
        Bodies.circle(160,220,14,fOptions),
        Bodies.circle(240,220,14,fOptions),
        Bodies.circle(320,220,14,fOptions),
        Bodies.circle(400,220,14,otherOptions),
        Bodies.circle(480,220,14,fOptions),
        Bodies.circle(560,220,14,fOptions),
        Bodies.circle(640,220,14,fOptions),
        Bodies.circle(720,220,14,otherOptions),
    
    //ROW 3
        Bodies.circle(40,260,14,otherOptions),
        Bodies.circle(120,260,14,fOptions),
        Bodies.circle(200,260,14,fOptions),
        Bodies.circle(280,260,14,fOptions),
        Bodies.circle(360,260,14,fOptions),
        Bodies.circle(440,260,14,fOptions),
        Bodies.circle(520,260,14,fOptions),
        Bodies.circle(600,260,14,fOptions),
        Bodies.circle(680,260,14,fOptions),
        Bodies.circle(760,260,14,otherOptions),
    
    //ROW 4
        Bodies.circle(80,300,14,otherOptions),
        Bodies.circle(160,300,14,fOptions),
        Bodies.circle(240,300,14,fOptions),
        Bodies.circle(320,300,14,fOptions),
        Bodies.circle(400,300,14,fOptions),
        Bodies.circle(480,300,14,fOptions),
        Bodies.circle(560,300,14,fOptions),
        Bodies.circle(640,300,14,fOptions),
        Bodies.circle(720,300,14,otherOptions),
    
    //ROW 5
        Bodies.circle(40,340,14,otherOptions),
        Bodies.circle(120,340,14,fOptions),
        Bodies.circle(200,340,14,fOptions),
        Bodies.circle(280,340,14,fOptions),
        Bodies.circle(360,340,14,fOptions),
        Bodies.circle(440,340,14,fOptions),
        Bodies.circle(520,340,14,fOptions),
        Bodies.circle(600,340,14,fOptions),
        Bodies.circle(680,340,14,fOptions),
        Bodies.circle(760,340,14,otherOptions),
    
    //ROW 6
        Bodies.circle(80,380,14,otherOptions),
        Bodies.circle(160,380,14,fOptions),
        Bodies.circle(240,380,14,fOptions),
        Bodies.circle(320,380,14,fOptions),
        Bodies.circle(400,380,14,fOptions),
        Bodies.circle(480,380,14,fOptions),
        Bodies.circle(560,380,14,fOptions),
        Bodies.circle(640,380,14,fOptions),
        Bodies.circle(720,380,14,otherOptions),
    
    //ROW 7
        Bodies.circle(40,420,14,otherOptions),
        Bodies.circle(120,420,14,otherOptions),
        Bodies.circle(200,420,14,fOptions),
        Bodies.circle(280,420,14,fOptions),
        Bodies.circle(360,420,14,fOptions),
        Bodies.circle(440,420,14,fOptions),
        Bodies.circle(520,420,14,fOptions),
        Bodies.circle(600,420,14,fOptions),
        Bodies.circle(680,420,14,otherOptions),
        Bodies.circle(760,420,14,otherOptions),
    
    //ROW 8
        Bodies.circle(80,460,14,otherOptions),
        Bodies.circle(160,460,14,otherOptions),
        Bodies.circle(240,460,14,fOptions),
        Bodies.circle(320,460,14,fOptions),
        Bodies.circle(400,460,14,fOptions),
        Bodies.circle(480,460,14,fOptions),
        Bodies.circle(560,460,14,fOptions),
        Bodies.circle(640,460,14,otherOptions),
        Bodies.circle(720,460,14,otherOptions),
    
    //ROW 9
        Bodies.circle(40,500,14,otherOptions),
        Bodies.circle(120,500,14,otherOptions),
        Bodies.circle(200,500,14,otherOptions),
        Bodies.circle(280,500,14,fOptions),
        Bodies.circle(360,500,14,fOptions),
        Bodies.circle(440,500,14,fOptions),
        Bodies.circle(520,500,14,fOptions),
        Bodies.circle(600,500,14,otherOptions),
        Bodies.circle(680,500,14,otherOptions),
        Bodies.circle(760,500,14,otherOptions),
    
    //ROW 10
        Bodies.circle(80,540,14,otherOptions),
        Bodies.circle(160,540,14,otherOptions),
        Bodies.circle(240,540,14,otherOptions),
        Bodies.circle(320,540,14,fOptions),
        Bodies.circle(400,540,14,fOptions),
        Bodies.circle(480,540,14,fOptions),
        Bodies.circle(560,540,14,otherOptions),
        Bodies.circle(640,540,14,otherOptions),
        Bodies.circle(720,540,14,otherOptions),
    
    //ROW 11
        Bodies.circle(40,580,14,otherOptions),
        Bodies.circle(120,580,14,otherOptions),
        Bodies.circle(200,580,14,otherOptions),
        Bodies.circle(280,580,14,otherOptions),
        Bodies.circle(360,580,14,fOptions),
        Bodies.circle(440,580,14,fOptions),
        Bodies.circle(520,580,14,otherOptions),
        Bodies.circle(600,580,14,otherOptions),
        Bodies.circle(680,580,14,otherOptions),
        Bodies.circle(760,580,14,otherOptions),
    
    //ROW 14
        Bodies.circle(80,620,14,otherOptions),
        Bodies.circle(160,620,14,otherOptions),
        Bodies.circle(240,620,14,otherOptions),
        Bodies.circle(320,620,14,otherOptions),
        Bodies.circle(400,620,14,fOptions),
        Bodies.circle(480,620,14,otherOptions),
        Bodies.circle(560,620,14,otherOptions),
        Bodies.circle(640,620,14,otherOptions),
        Bodies.circle(720,620,14,otherOptions),
    
    //ROW 13
        Bodies.circle(40,660,14,otherOptions),
        Bodies.circle(120,660,14,otherOptions),
        Bodies.circle(200,660,14,otherOptions),
        Bodies.circle(280,660,14,otherOptions),
        Bodies.circle(360,660,14,otherOptions),
        Bodies.circle(440,660,14,otherOptions),
        Bodies.circle(520,660,14,otherOptions),
        Bodies.circle(600,660,14,otherOptions),
        Bodies.circle(680,660,14,otherOptions),
        Bodies.circle(760,660,14,otherOptions),
];

for (i = 0; i < flanges.length; i++){
    World.add(engine.world,[flanges[i]]);
    Body.setAngle(flanges[i], 16.23);
}

//Slots
const catches = [
    Bodies.rectangle(40,750,0,80,fOptions)
];
let xasx = 100;
let xasx2 = 415;
for (v = 0; v < 9; v++){
    catches.push(Bodies.rectangle(xasx,750,2,80,fOptions));
    World.add(engine.world,[catches[v]]);
    xasx = xasx + 95;

    catches.push(Bodies.rectangle(xasx2,750,2,80,fOptions));
    World.add(engine.world,[catches[v]]);
    xasx2 = xasx2 + 95;
}
    
// create disk
let disk = [];
let count = 0;
const dOptions = {
    friction: .5,
    restitution: 1
};

function addD() {
    if (event.offsetY > 120) {
        return;
    }

    if (disk.length > 0) {
        World.remove(engine.world, disk.pop());
    }

    disk.push(Bodies.circle(event.offsetX ,event.offsetY, 10, dOptions ));
    disk[count].label = "circle";
    World.add(engine.world,[disk[count]]);
    count++;
}

// create ground sky and walls
const ground = Bodies.rectangle(400, 800, 810, 60, { isStatic: true });
const leftWall = Bodies.rectangle(0, 400,2, 810, { isStatic: true });
const righttWall = Bodies.rectangle(800, 400,2 , 810, { isStatic: true });
const sky = Bodies.rectangle(400, 0,810,2, { isStatic: true });

// add all of the bodies to the world
World.add(engine.world, [sky, righttWall, leftWall, ground]);

let ballXCoordinate = 0;
let ballLastUpdated = Date.now();

Events.on(engine, 'collisionStart', (event) => {
    event.pairs.forEach((collision) => {
    var bodyA = collision.bodyA;
    var bodyB = collision.bodyB;
    if (bodyA.isStatic === true && bodyB.isStatic === false) {
        var audio = new Audio('ping.wav');
        audio.play();
        if (bodyB.label === 'circle') {
            if (bodyB.position.y > 710) {
                ballXCoordinate = bodyB.position.x;
                ballLastUpdated = Date.now();
                }
            }
        }
    });
});

//Remove last ball
const removeBall = () => {
if (disk.length > 0) {
    World.remove(engine.world, disk.pop());
    count--;
    }
};


document.getElementById("can").addEventListener("click", function (event) {
    if (event.clientY <= 120) {
        removeBall();
        addD();
    }
});

setInterval(() => {
    if (ballXCoordinate >= 1 && ballXCoordinate <= 100) {
        console.log("Ball is in 1st slot");
        document.getElementById("result").innerHTML = "You Won a Card! |";
        document.getElementById("prize").innerHTML = "Click here to see your card |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "card.html";
        });
    } else if (ballXCoordinate > 100 && ballXCoordinate <= 195) {
        console.log("Ball is in 2nd slot");
        document.getElementById("result").innerHTML = "| You Won a Poem! |";
        document.getElementById("prize").innerHTML = "Click here to read your poem |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "poem.html";
        });
    } else if (ballXCoordinate > 195 && ballXCoordinate <= 290) {
        console.log("Ball is in 3rd slot");
        document.getElementById("result").innerHTML = "| Small Prize! You Won a Chocolate! |";
        document.getElementById("prize").innerHTML = "Click here to pick your chocolate (reese's), then send a screenshot to Matteo to purchase |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "https://www.ubereats.com/ca/store/cvs-572-paterson-ave/nZoiBD9jVdCyN7rKQChpgw?diningMode=DELIVERY&storeSearchQuery=reese%27s";
        });
    } else if (ballXCoordinate > 290 && ballXCoordinate <= 385) {
        console.log("Ball is in 4th slot");
        document.getElementById("result").innerHTML = "| BIG PRIZE!!! You Won a Piggie Plush! |";
        document.getElementById("prize").innerHTML = "Click here to see your BIG prize |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "https://www.amazon.com/Levenkeness-Hugging-Birthday-Valentine-Christmas/dp/B07QD4ZGYN/ref=sr_1_9?crid=2BFVJJ5QM7TIJ&keywords=pig%2Bplush&qid=1675908858&refinements=p_72%3A1248963011&rnid=1248961011&s=toys-and-games&sprefix=pig%2Bplush%2Caps%2C118&sr=1-9&th=1";
        });
    } else if (ballXCoordinate > 385 && ballXCoordinate <= 415) {
        console.log("Ball is in 5th slot");
        document.getElementById("result").innerHTML = "||| BEST PRIZE!!! YOU WON FLOWERS!!! |||";
        document.getElementById("prize").innerHTML = "Click here to see the best prize |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "flower.html";
        });
    } else if (ballXCoordinate > 415 && ballXCoordinate <= 510) {
        console.log("Ball is in 6th slot");
        document.getElementById("result").innerHTML = "| BIG PRIZE!!! You Won a Piggie Plush! |";
        document.getElementById("prize").innerHTML = "Click here to see your BIG prize |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "https://www.amazon.com/Levenkeness-Hugging-Birthday-Valentine-Christmas/dp/B07QD4ZGYN/ref=sr_1_9?crid=2BFVJJ5QM7TIJ&keywords=pig%2Bplush&qid=1675908858&refinements=p_72%3A1248963011&rnid=1248961011&s=toys-and-games&sprefix=pig%2Bplush%2Caps%2C118&sr=1-9&th=1";
        });
    } else if (ballXCoordinate > 510 && ballXCoordinate <= 605) {
        console.log("Ball is in 7th slot");
        document.getElementById("result").innerHTML = "| Small Prize! You Won a Chocolate! |";
        document.getElementById("prize").innerHTML = "Click here to pick your chocolate (reese's), then send a screenshot to Matteo to purchase |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "https://www.ubereats.com/ca/store/cvs-572-paterson-ave/nZoiBD9jVdCyN7rKQChpgw?diningMode=DELIVERY&storeSearchQuery=reese%27s";
        });
    } else if (ballXCoordinate > 605 && ballXCoordinate <= 700) {
        console.log("Ball is in 8th slot");
        document.getElementById("result").innerHTML = "You Won a Poem! |";
        document.getElementById("prize").innerHTML = "Click here to read your poem |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "poem.html";
        });
    } else if (ballXCoordinate > 700 && ballXCoordinate <= 800) {
        console.log("Ball is in 9th slot");
        document.getElementById("result").innerHTML = "You Won a Card! |";
        document.getElementById("prize").innerHTML = "Click here to see your card |";
        document.getElementById("prize").addEventListener("click", function() {
            window.location.href = "card.html";
        });
    }
}, 1000);

//Run everything
Engine.run(engine);
Render.run(render);
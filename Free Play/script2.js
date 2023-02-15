const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body;
    Events = Matter.Events;
    

// create an engine
const engine = Engine.create();

// create a renderer
const render = Render.create({
    element: document.getElementById('can'),
    engine: engine,
    options: {
        height: 800,
        wireframes: false,
        //background: "#FF8896"
    }
});
// create flanges
const fOptions = {
    isStatic: true,
    render: {
        fillStyle: '#FF3334',
    }
}

const otherOptions = {
    isStatic: true,
    render: {
        fillStyle: '#FFBBC1',
    }
}

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
    World.add(engine.world,[flanges[i]])
    Body.setAngle(flanges[i], 16.23)
}

///Slots
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
}
function addD() {
    if (event.offsetY > 120) {
        return;
    }
    disk.push(Bodies.circle(event.offsetX ,event.offsetY, 10, dOptions ))
    World.add(engine.world,[disk[count]])
    count++
}
// create ground sky and walls
const ground = Bodies.rectangle(400, 800, 810, 60, { isStatic: true });
const leftWall = Bodies.rectangle(0, 400,2, 810, { isStatic: true });
const righttWall = Bodies.rectangle(800, 400,2 , 810, { isStatic: true });
const sky = Bodies.rectangle(400, 0,810,2, { isStatic: true });
// add all of the bodies to the world
World.add(engine.world, [sky,righttWall,leftWall,ground]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);
import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */



const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const width = window.innerWidth*0.8;
const height = window.innerHeight*0.8;


const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine,
    options: {
        wireframes: false,
        width,
        height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))



//Walls

const walls = [
    // up
    Bodies.rectangle(width/2, 0, width, 40, {isStatic: true}),
    // down
    Bodies.rectangle(width/2, height, width, 40, {isStatic: true}),
    // left
    Bodies.rectangle(0, height/2, 40, height, {isStatic: true}),
    //right
    Bodies.rectangle(width, height/2, 40, height, {isStatic: true}),
];



World.add(world, walls);

// Random shapes
for(let i=0; i < 100; i++) {
    if(Math.random() > 0.8) {
    World.add(world, Bodies.rectangle(Math.random() * width,Math.random() * height, width*.05, width*.05)); 
    } else if (Math.random() > 0.6 && Math.random() <= 0.8) {
        World.add(world, Bodies.circle(Math.random() * width,Math.random() * height, width*.02)); 
    } else if (Math.random() > 0.3 && Math.random() <= 0.6) {
        World.add(world, Bodies.trapezoid(Math.random() * width,Math.random() * height, width*.05, width*.05, width*.003)); 
    } else {
        World.add(world, Bodies.polygon(Math.random() * width,Math.random() * height, width*.05, width*.01)); 
    }
}

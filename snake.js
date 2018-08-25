let canvas;
let ctx;

let vectors = new Array();
let length = 15;

let currentX = -1;
let currentY = -1;

function getCoords(event) {
    currentX = event.clientX;
    currentY = event.clientY;
}

function draw() {
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();

    vectors.push([currentX, currentY]);
    vectors.shift();
    
    for (i = 0; i < length; i++) {
        if (vectors[i][0] > -1 && vectors[i][1] > -1) {
            ctx.beginPath();
            ctx.arc(vectors[i][0], vectors[i][1], 75 - (30 + 2 * i), 0, 2 * Math.PI, false);

            ctx.fillStyle = 'rgb(255, ' + (20 * i) + ', 0)';
            ctx.fill();
        }
    }
}

function init() {
    canvas = document.getElementById('snake_canvas');
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    for (i = 0; i < length; i++) {
        vectors.push([currentX, currentY]);
    }

    ctx = canvas.getContext('2d');

    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();

    clearInterval();
    setInterval(draw, 10);
}

onload = init;
onresize = init;
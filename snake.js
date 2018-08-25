let canvas;
let ctx;

let vectors = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],];

function draw(event) {
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();

    vectors.push([event.clientX, event.clientY]);
    vectors.shift();
    
    for (i = 0; i < vectors.length; i++) {
        ctx.beginPath();
        ctx.arc(vectors[i][0], vectors[i][1], 10 + 3 * i, 0, 2 * Math.PI, false);

        ctx.fillStyle = 'red';
        ctx.fill();
        ctx.stroke();
    }
};

function init() {
    canvas = document.getElementById('snake_canvas');
    canvas.height = document.body.clientHeight;
    canvas.width = document.body.clientWidth;

    ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.strokeStyle = '#0033';
    ctx.lineWidth = 5;

    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fill();
};

onload = init;
onresize = init;
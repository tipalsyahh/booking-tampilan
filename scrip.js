const canvas = document.getElementById('signature-pad');
const ctx = canvas.getContext('2d');

let drawing = false;
let lastX = 0;
let lastY = 0;

/* Mulai menggambar */
function startDraw(x, y) {
    drawing = true;
    lastX = x;
    lastY = y;
}

/* Menggambar */
function draw(x, y) {
    if (!drawing) return;

    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#000';

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.stroke();

    lastX = x;
    lastY = y;
}

/* Berhenti menggambar */
function endDraw() {
    drawing = false;
}

/* Mouse */
canvas.addEventListener('mousedown', e => {
    startDraw(e.offsetX, e.offsetY);
});

canvas.addEventListener('mousemove', e => {
    draw(e.offsetX, e.offsetY);
});

canvas.addEventListener('mouseup', endDraw);
canvas.addEventListener('mouseleave', endDraw);

/* Touch (HP) */
canvas.addEventListener('touchstart', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    startDraw(
        touch.clientX - rect.left,
        touch.clientY - rect.top
    );
});

canvas.addEventListener('touchmove', e => {
    e.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    draw(
        touch.clientX - rect.left,
        touch.clientY - rect.top
    );
});

canvas.addEventListener('touchend', endDraw);
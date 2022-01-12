var canvas = document.querySelector("#draw");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADASS";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;
var isDrawing = false;
var lastX = 0;
var lastY = 0;
var hue = 0;
var direction = true;
var draw = function (e) {
    var _a;
    if (!isDrawing)
        return;
    console.log(e);
    ctx.strokeStyle = "hsl(" + hue + ", 100%, 50%)";
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
    hue++;
    if (hue >= 360) {
        hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction;
    }
    if (direction) {
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
};
canvas.addEventListener("mousedown", function (e) {
    var _a;
    isDrawing = true;
    _a = [e.offsetX, e.offsetY], lastX = _a[0], lastY = _a[1];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", function () { return (isDrawing = false); });
canvas.addEventListener("mouseout", function () { return (isDrawing = false); });

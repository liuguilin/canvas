// let timer = setTimeout(() => {
//     clearTimeout(timer);

//     console.log(timer);
// }, 1 * 1000);


// console.log(timer);

function draw() {
    var canvas = document.getElementById('tutorial');
    if (!canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(200,0,0)";
    //绘制矩形
    ctx.fillRect(10, 10, 55, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 55, 50);
}
draw();
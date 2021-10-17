canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "purple";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", md);
function md(e){
    color = document.getElementById("ti").value;
    console.log(color);
    mx = e.clientX - canvas.offsetLeft;
    my = e.clientY - canvas.offsetTop;
    console.log("x = "+mx+"y = "+my);
    circle(mx,my);
}
function circle(mx,my){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mx, my, 40 ,0 , 2 * Math.PI);
    ctx.stroke();
}

function clear(){
    ctx.clearRect(0 ,0 ,canvas.width ,canvas.height );
    console.log(ctx);
}
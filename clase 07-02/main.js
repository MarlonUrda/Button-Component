const canvas = document.createElement("canvas");
canvas.width = 200;
canvas.height = 200;
const ctx = canvas.getContext("2d");

// ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 100, 100);

// ctx.moveTo(110, 110);
// ctx.lineTo(120, 120);
// ctx.stroke();

ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(50, 150);
ctx.stroke();
ctx.lineTo(200, 150);
ctx.stroke();
ctx.lineTo(150, 0);
ctx.stroke();
ctx.fillStyle = "red";
//ctx.fillText("Triangulo", 130, 100);
ctx.strokeText("triangulo", 130, 100);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(40, 30, 20, 0, 360);
ctx.stroke();
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
let img = new Image();
img.src = "./20220820192839_1.png";
img.onload = () => {
  ctx.drawImage(img, 20, 20, 40, 40);
};
ctx.closePath();

document.body.append(canvas);

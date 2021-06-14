canvas = document.getElementById("myCanvas");
color = "blue";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(250, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "black";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(350, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "red";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(450, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "yellow";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(300, 250, 50, 0, 2 * Math.PI);
ctx.stroke();

color = "green";
ctx = canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(400, 250, 50, 0, 2 * Math.PI);
ctx.stroke();
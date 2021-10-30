var canvas = document.getElementById('paralaxx');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(0, 40);
ctx.quadraticCurveTo(311, 80, 622, 40);
ctx.lineTo(622, 0);
ctx.fill();
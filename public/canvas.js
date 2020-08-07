let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

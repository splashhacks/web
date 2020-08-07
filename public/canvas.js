let canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function(_) {
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

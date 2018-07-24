window.a = 5;

const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  const game = new Game();
})

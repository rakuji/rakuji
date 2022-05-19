function doFirst() {
  // 先跟HTML 畫面產生關聯
  let canvas = document.getElementById("time");
  let context = canvas.getContext("2d");

  context.fillStyle = "red";
  context.strokeStyle = "red";
  context.linewidth = 5;

  context.moveTo(0, 30);
  context.lineTo(0, 30);
  context.lineTo(10, 50);
  context.lineTo(30, 40);
  context.closePath();

  context.stroke();
}

window.addEventListener("load", doFirst);

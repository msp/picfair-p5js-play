var pfImage;
var vScale = 1;
var slider;

function preload() {
  pfImage = loadImage("picfair-61604043-bmx-bike-stunt-table-top-PREVIEW.jpg");
}

function setup() {
  createCanvas(600, 200);
  // pixelDensity(1);

  slider = createSlider(0, 255, 150);
  slider.position(10, 10);
  slider.style('width', '80px');
}

function draw() {
  // background(51);

  pfImage.loadPixels();
  loadPixels();
  for (var y = 0; y < pfImage.height; y++) {
    for (var x = 0; x < pfImage.width; x++) {
      var index = (pfImage.width - x + 1 + (y * pfImage.width))*4;
      var r = pfImage.pixels[index+0];
      var g = pfImage.pixels[index+1];
      var b = pfImage.pixels[index+2];

      var bright = (r+g+b)/3;
      var fillColor;
      // var w = map(bright, 0, 255, 0, vScale);

      if (bright < slider.value()) {
        fillColor = bright;
      } else {
        // fillColor = random(255);
        fillColor = '#E3811F';
      }
      noStroke();
      fill(fillColor);
      rectMode(CENTER);
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  }

  image(pfImage, 300, 0);
}

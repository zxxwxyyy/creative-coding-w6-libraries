// Creative Coding W6 - P5JS Libraries
// Playing with Asciiart library with api to create a cat filter, offering button interaction
// references: https://www.tetoki.eu/asciiart/index.html#examples

let myAsciiArt;
let catImages = [];
let ascii_arr;
let canvas
let isSee = false;

// preload random cat images from the url
function preload() {
  catImages = loadImage('https://cataas.com/cat');
}

function setup() {
  // move canvas down a bit to create space for the headers
  canvas = createCanvas(640, 540); 
  canvas.position(0, 50)
  // references from myAsciiArt website with template new AsciiArt(_sketch, _fontName,_fontSize, _textStyle)
  myAsciiArt = new AsciiArt(this, 'monospace', 6, NORMAL);  
  // create buttons to interact; when click "see me" remove the filter; when click "next cat", get new cat images
  button = createButton("see me!")
  button.position(520,30)
  button.mousePressed(seeMe)

  button1 = createButton("next cat!")
  button1.position(585, 30)
  button1.mousePressed(nextCat)
}

function draw() {

  noFill()

    background(0);
    // convert the image to low pixel images, then to ASCII art
    ascii_arr = myAsciiArt.convert(catImages, catImages.width/6, catImages.height/6);
    myAsciiArt.typeArray2d((ascii_arr), this);
    // experimenting value of the posterization myAsciiArt offers
    catImages.filter(POSTERIZE, 6)

    //using if statement to bring the original image if click "see me"
  if(isSee){
    tint(255, 300);
    image(catImages, 0, 0, width, height);
  }
}
// function for loading next cat image; setting isSee to false again until user click"see me"
function nextCat(){
  catImages = loadImage('https://cataas.com/cat');
  isSee = false
}

function seeMe(){
  isSee = !isSee
}
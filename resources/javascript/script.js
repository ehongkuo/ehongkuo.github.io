/*

const images = ['profile', 'baby', 'highschool', 'church', 'faith', 'tangle', 'house'];
const pictures = [];

images.forEach(function(key) {
  pictures.push(document.getElementById(key));
})

let picture = document.querySelector('.image');

// Functions that enlarge the picture when you hover

const imageSelect = function(event) {
  event.target.style.maxHeight = '100%';
}

const imageDeselect = function(event) {
  event.target.style.maxHeight = '95%';
}

let eventAssignment = function(image) {
  image.onmouseover = function() {
    imageSelect(event);
  }
  image.onmouseout = function() {
    imageDeselect(event);
  }
}

pictures.forEach(eventAssignment);

*/

let picOne = document.getElementById('profile');
let picTwo = document.getElementById('baby');
let picThree = document.getElementById('highschool');
let picFour = document.getElementById('church');
let picFive = document.getElementById('faith');
let picSix = document.getElementById('tangle');
let picSeven = document.getElementById('house');

let capOne = document.getElementById('pCap');
let capTwo = document.getElementById('bCap');
let capThree = document.getElementById('hCap');
let capFour = document.getElementById('cCap');
let capFive = document.getElementById('fCap');
let capSix = document.getElementById('tCap');
let capSeven = document.getElementById('houseCap');

picTwo.hidden = true;
picThree.hidden = true;
picFour.hidden = true;
picFive.hidden = true;
picSix.hidden = true;
picSeven.hidden = true;

capTwo.hidden = true;
capThree.hidden = true;
capFour.hidden = true;
capFive.hidden = true;
capSix.hidden = true;
capSeven.hidden = true;

picOne.onclick = function() {
  picTwo.hidden = false;
  picOne.hidden = true;
  capTwo.hidden = false;
  capOne.hidden = true;
  //picTwo.style.transform = "rotate(2deg)";
}

picTwo.onclick = function() {
  picThree.hidden = false;
  picTwo.hidden = true;
  capThree.hidden = false;
  capTwo.hidden = true;
  //picThree.style.transform = "rotate(-2deg)";
}

picThree.onclick = function() {
  picFour.hidden = false;
  picThree.hidden = true;
  capFour.hidden = false;
  capThree.hidden = true;
  //picFour.style.transform = "rotate(0deg)";
}

picFour.onclick = function() {
  picFive.hidden = false;
  picFour.hidden = true;
  capFive.hidden = false;
  capFour.hidden = true;
  //picFive.style.transform = "rotate(-1deg)";
}

picFive.onclick = function() {
  picSix.hidden = false;
  picFive.hidden = true;
  capSix.hidden = false;
  capFive.hidden = true;
  //picSix.style.transform = "rotate(3deg)";
}

picSix.onclick = function() {
  picSeven.hidden = false;
  picSix.hidden = true;
  capSeven.hidden = false;
  capSix.hidden = true;
  //picSeven.style.transform = "rotate(1deg)";
}

picSeven.onclick = function() {
  picOne.hidden = false;
  picSeven.hidden = true;
  capOne.hidden = false;
  capSeven.hidden = true;
  //picOne.style.transform = "rotate(-3deg)";

}
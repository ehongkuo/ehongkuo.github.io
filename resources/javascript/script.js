

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

let picOne = document.getElementById('profile');
let picTwo = document.getElementById('baby');
let picThree = document.getElementById('highschool');
let picFour = document.getElementById('church');
let picFive = document.getElementById('faith');
let picSix = document.getElementById('tangle');
let picSeven = document.getElementById('house');

picTwo.hidden = true;
picThree.hidden = true;
picFour.hidden = true;
picFive.hidden = true;
picSix.hidden = true;
picSeven.hidden = true;

picOne.onclick = function() {
  picTwo.hidden = false;
  picOne.hidden = true;
  picTwo.style.transform = "rotate(2deg)";
}

picTwo.onclick = function() {
  picThree.hidden = false;
  picTwo.hidden = true;
  picThree.style.transform = "rotate(-2deg)";
}

picThree.onclick = function() {
  picFour.hidden = false;
  picThree.hidden = true;
  picFour.style.transform = "rotate(0deg)";
}

picFour.onclick = function() {
  picFive.hidden = false;
  picFour.hidden = true;
  picFive.style.transform = "rotate(-1deg)";
}

picFive.onclick = function() {
  picSix.hidden = false;
  picFive.hidden = true;
  picSix.style.transform = "rotate(3deg)";
}

picSix.onclick = function() {
  picSeven.hidden = false;
  picSix.hidden = true;
  picSeven.style.transform = "rotate(1deg)";
}

picSeven.onclick = function() {
  picOne.hidden = false;
  picSeven.hidden = true;
  picOne.style.transform = "rotate(-3deg)";
}
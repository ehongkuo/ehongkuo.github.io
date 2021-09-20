

const images = ['profile'];
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


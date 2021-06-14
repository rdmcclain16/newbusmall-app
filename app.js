'use strict';


//set empty arrays & tally
var allImages = [];
var voteRounds = 0;

//constructor function
function VoteImage(name, imagePath) {
    this.name = name;
    this.imagePath = imagePath;
    this.numClicked = 0;
    this.timesRendered = 0;
    allImages.push(this);
}

//create objects
new VoteImage('Bag', 'img/bag.jpg');
new VoteImage('Banana', 'img/banana.jpg');
new VoteImage('Bathroom', 'img/bathroom.jpg');
new VoteImage('Boots', 'img/boots.jpg');
new VoteImage('Breakfast', 'img/breakfast.jpg');
new VoteImage('Bubblegum', 'img/bubblegum.jpg');
new VoteImage('Chair', 'img/chair.jpg');
new VoteImage('Cthulu', 'img/cthulhu.jpg');
new VoteImage('Dog-duck', 'img/dog-duck.jpg');
new VoteImage('Dragon', 'img/dragon.jpg');
new VoteImage('Pen', 'img/pen.jpg');
new VoteImage('Pet-sweep', 'img/pet-sweep.jpg');
new VoteImage('Scissors', 'img/scissors.jpg');
new VoteImage('Sweep', 'img/sweep.png');
new VoteImage('Tauntaun', 'img/tauntaun.jpg');
new VoteImage('Unicorn', 'img/unicorn.jpg');
new VoteImage('Usb', 'img/usb.gif');
new VoteImage('Water-can', 'img/water-can.jpg');
new VoteImage('Wine-glass', 'img/wine-glass.jpg');

//grab image spot from html and fill/insert to html
var image1 = document.getElementById('img1');
var image2 = document.getElementById('img2');
var image3 = document.getElementById('img3');

//generate random number to pick random image array position
function generateRandomImage() {
    var index = Math.floor(Math.random() * allImages.length);

    while (
        allImages[index].name === image1.name ||
        allImages[index].name === image2.name ||
        allImages[index].name === image3.name
    ) {
        index = Math.floor(Math.random() * allImages.length);
    }
    return allImages[index];
}

//new image from random
function renderImages() {
    var newImage1 = generateRandomImage();
    image1.src = newImage1.imagePath;
    image1.name = newImage1.name;
    newImage1.timesRendered++;
    // voteRounds = voteRounds++;

    var newImage2 = generateRandomImage();
    image2.src = newImage2.imagePath;
    image2.name = newImage2.name;
    newImage2.timesRendered++;
    // voteRounds = voteRounds++;

    var newImage3 = generateRandomImage();
    image3.src = newImage3.imagePath;
    image3.name = newImage3.name;
    newImage3.timesRendered++;
    // voteRounds = voteRounds++;
}
renderImages();

//render results// display vote data on page
function renderResults() {
    var listEl = document.getElementById('ranking');

    for (var i = 0; i < allImages.length; i++) {
        var rank = document.createElement('li');
        var message = (allImages[i].name + ' had ' + allImages[i].numClicked + ' and showed ' + allImages[i].timesRendered + ' times!');
        rank.textContent = message;
        listEl.appendChild(rank);
    }
}

//null same as '' 
//check how many times voted then render new images
function clickHandler(event) {
    voteRounds++;
    var listEl = document.getElementById('ranking');
    listEl.innerHTML = '';

    for (var i = 0; i < allImages.length; i++) {
        if (allImages[i].name === event.target.name) {
            allImages[i].numClicked++;
            // voteRounds++;
            console.log(voteRounds);
            renderImages();
        } if (voteRounds >= 25) {
            image1.removeEventListener('click', clickHandler);
            image2.removeEventListener('click', clickHandler);
            image3.removeEventListener('click', clickHandler);
            event = false;
            alert('Thanks for Voting! heres the final results!');
            renderResults();
            break;
        }
    }

}
// renderImages();

image1.addEventListener('click', clickHandler);
image2.addEventListener('click', clickHandler);
image3.addEventListener('click', clickHandler);
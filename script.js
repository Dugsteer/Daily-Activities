// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const ball = document.getElementById('ball');
const blue = window.matchMedia("(max-width: 800px)");
const cheers = new Audio('sounds/cheers.mp3');

// function deactivate(){
//     ball.classList.remove('action');
// }

// function kickball(){
//     ball.classList.add('action');
//     cheers.play();
//     setTimeout(deactivate, 2000);
// }



//     setInterval(switchpic, 2000);

//Play applause 

// function clapping(){
//     const claps = new Audio("sounds/applause.wav");
//     claps.play();
// }

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

// Center the loader wherever the page is
// function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
// checkForTop();

//Manage the loader
// function stopLoader() {loader.classList.add("stop");}
// function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
// setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

// Change main pic

// setInterval(picChanger, 5000);
// picChanger();

// function picChanger(){
//   mainpic.innerHTML === '<img src="img/froggy.png" alt="decorative">' ? mainpic.innerHTML = '<img src="img/froggy2.png" alt="decorative">' :  mainpic.innerHTML ='<img src="img/froggy.png" alt="decorative">'
// }

//FLIP CARDS

// const inner = document.getElementById('inner');

// function flipMe(){
//     inner.classList.toggle('turnMe');
// }

//CHANGE CARDS
const count = document.getElementById('count');
let imageArt = document.getElementById('image-art');
let imageText = document.getElementById('image-text');

var imageList = [
  "get-up.jpeg",
  "brush-your-teeth.jpeg",
  "take-a-shower.jpeg",
  "get-dressed.jpeg",
  "put-on-makeup.jpeg",
  "comb-your-hair.jpeg",
  "have-breakfast.jpeg",
  "feed-the-dog.jpeg",
  "walk-the-dog.jpeg",
  "do-exercise.jpeg",
  "catch-the-bus.jpeg",
  "go-to-school.jpeg",
  "drive-a-car.jpeg",
  "go-to-work.jpeg",
  "drink-water.jpeg",
  "ride-a-bike.jpeg",
  "clean-the-house.jpeg",
  "use-the-telephone.jpeg",
  "have-lunch.jpeg",
  "draw-pictures.jpeg",
  "listen-to-music.jpeg",
  "watch-tv.jpeg",
  "go-shopping.jpeg",
  "play-videogames.jpeg",
  "read-a-book.jpeg",
  "do-your-homework.jpeg",
  "cook-the-dinner.jpeg",
  "have-a-bath.jpeg",
  "go-to-sleep.jpeg",
];


let y = imageText.innerHTML;
let z = y.concat(".jpeg");
let x = imageList.indexOf(z);


function goForwards() {
  if (x < imageList.length - 1) {
    x++;
    imageArt.src =  `/img/${imageList[x]}`;
   imageText.textContent = `${imageList[x].slice(0, -5).replaceAll("-", " ")}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[imageList.length - 1]}`;
    imageText.textContent = `${imageList[imageList.length - 1].slice(0, -5).replaceAll("-", " ")}`;
    count.innerHTML = `${imageList.length}/${imageList.length}`;
    x = 0;
    x = imageList.length -1;
    return x;
  }
}

function goBackwards() {
  if (x > 0) {
    x--;
    imageArt.src =  `/img/${imageList[x]}`;
    imageText.textContent = `${imageList[x].slice(0, -5).replaceAll("-", " ")}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[0]}`;
    imageText.textContent = `${imageList[0].slice(0, -5).replaceAll("-", " ")}`;
    count.innerHTML = `${1}/${imageList.length}`;
    x = 0;
    return x;
  }
}

goForwards();
goBackwards();

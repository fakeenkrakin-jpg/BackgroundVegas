function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var titles = [
   "Їбав мамку Бушера",
];

var Backgrounds = [
   "images/backgrounds/loading_posters01.jpg",
   "images/backgrounds/loading_posters02.jpg",
   "images/backgrounds/loading_posters03.jpg",
   "images/backgrounds/loading_magazines01.jpg",
   "images/backgrounds/loading_magazines02.jpg",
   "images/backgrounds/loading_magazines03.jpg",
   "images/backgrounds/loading_desktop01.jpg",
   "images/backgrounds/loading_desktop02.jpg",
   "images/backgrounds/loading_desktop03.jpg",
   "images/backgrounds/loading_desktop04.jpg",
   "images/backgrounds/loading_desktop05.jpg",
   "images/backgrounds/loading_desktop06.jpg",
   "images/backgrounds/loading_desktop07.jpg",
   "images/backgrounds/loading_desktop08.jpg",
   "images/backgrounds/loading_bulletinboard01.jpg",
   "images/backgrounds/loading_bulletinboard02.jpg",
   "images/backgrounds/loading_bulletinboard03.jpg",
   "images/backgrounds/loading_bulletinboard04.jpg",
   "images/backgrounds/loading_bulletinboard05.jpg",
   "images/backgrounds/loading_bulletinboard06.jpg",
   "images/backgrounds/loading_bulletinboard07.jpg",
   "images/backgrounds/loading_bulletinboard08.jpg",
   "images/backgrounds/loading_bulletinboard09.jpg",
   "images/backgrounds/loading_building01.jpg",
   "images/backgrounds/loading_building02.jpg",
   "images/backgrounds/loading_building03.jpg",
   "images/backgrounds/loading_billboard01.jpg",
   "images/backgrounds/loading_billboard02.jpg",
   "images/backgrounds/loading_billboard03.jpg",
   "images/backgrounds/loading_billboard04.jpg",
   "images/backgrounds/loading_billboard05.jpg",
   "images/backgrounds/loading_billboard06.jpg",
   "images/backgrounds/loading_billboard07.jpg",
   "images/backgrounds/loading_billboard08.jpg",
   "images/backgrounds/loading_billboard09.jpg",
]
var RandomText = getRandomInt(titles.length);
let RandomBackground = getRandomInt(Backgrounds.length);
var SwitchDelay = 10000;

const imgs = [document.getElementById('img1'),document.getElementById('img2')];
var elem = document.getElementById("toptext");
var counter = new Counter(elem, SwitchDelay);
counter.start();

let back=0;
let pause = false;

function imgLoaded() {

    imgs[back].style.animationDirection = 'normal';
    back = (back + 1)%2;
    imgs[back].style.animationDirection = 'reverse';

    imgs[0].style.animationName = 'fade-in';
    imgs[1].style.animationName = 'fade-in';
}

function next() { 
    imgs[0].style.animationName ='nothing';
    imgs[1].style.animationName = 'nothing';

    imgs[back].style.opacity = 0;
    imgs[(back+1)%2].style.opacity = 1;

    RandomBackground = getRandomInt(Backgrounds.length);
    imgs[back].src = Backgrounds[RandomBackground]
    
}

function Counter(elem, delay) {
    var interval;
    elem.innerText = titles[RandomText];
    imgs[0].src = Backgrounds[RandomBackground]
    imgs[1].src = Backgrounds[RandomBackground]
    
   
    function updateDisplay(value) { elem.innerText = value; next()}
    function run() {RandomText = getRandomInt(titles.length); updateDisplay(titles[RandomText]); }
    function start() { interval = window.setInterval(run, delay); }

    this.start = start;
}


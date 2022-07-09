const key = document.querySelector('#qwerty');
const phr =  document.querySelector('#phrase');
const rest = document.querySelector('.btn__reset');
const phrases = ['pit stop', 'enginebrake', 'starting gird', 'paddock', 'parabolica'];
const ranNum = Math.floor(Math.random()*5);
const overLay = document.querySelector('#overlay');
const main_head = document.getElementsByClassName('#title');
const score = document.querySelector('#scoreboard');
let missed = 0;
let match = null; 
let dis = '';
let ul = '';
let li = '';


rest.addEventListener('click', (e) => {
  overLay.style.display = "none"
  
});

function getRandomPhraseAsArray() {
  dis = phrases[ranNum];
  return dis;
};

function addPhraseToDisplay(dis) {
 for(let i = 0; i < dis.length; i++)  {
  ul = document.getElementById("phrase");
  li = document.createElement('li');
  li.innerHTML = dis[i];
  ul.appendChild(li);
  if(dis[i] == ' ') {
    li.classList.add('space');
  } else {
    li.classList.add('letter');
  
  };
 
 };
};
getRandomPhraseAsArray();
addPhraseToDisplay(dis);



function checkLetter(clicked) {
  let letter = document.querySelectorAll('.letter');
  let li = document.querySelectorAll('li');
  for(let i = 0; i < dis.length; i++) {
    if(dis[i] == clicked) {
      li[i].classList.add('show');
      match = clicked;
    } else {
     console.log('no');
    };
  };
  checkWin();
  
  return match;
 
};


qwerty.addEventListener('click', (e) => {
 
  if(e.target.tagName === 'BUTTON' && e.target.className != 'chosen') {
   e.target.classList.add('chosen');
   let clicked = e.target;
   
   checkLetter(clicked.textContent);
   let matching = match;
    if(e.target.textContent == match ) {
      console.log(matching);
    } else {
      missed = missed + 1;
      if(missed == 1) {
        score.innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px">';
      };
      if(missed == 2) {
        score.innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px">';
      };
      if(missed == 3) {
        score.innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px">';
      };
      if(missed == 4) {
        score.innerHTML = '<img src="images/liveHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px"> <img src="images/lostHeart.png" height="35px" width="30px">';
      };
      console.log(score);
      return missed;
    };
  };

}); 

function checkWin() {
  let letters = document.querySelectorAll('.letter');
  let shown = document.querySelectorAll('.show');

  if( missed < 4) {
      if(letters.length == shown.length) {
        overLay.style.display = "flex";
        overLay.classList.add('win');
        overLay.innerHTML = ('wwwooooo you won!');
        console.log('win');
      };
    } else {
      overLay.innerHTML = 'sorry you have lost';
      overLay.style.display = "flex";
      overLay.classList.add('lose');
    };

};


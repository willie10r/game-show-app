const key = document.querySelector('#qwerty');
const phr =  document.querySelector('#phrase');
const rest = document.querySelector('.btn__reset');
const phrases = ['pit stop', 'enginebrake', 'starting gird', 'paddock', 'parabolica'];
const ranNum = Math.floor(Math.random()*5);
let missed = 0;
let dis = '';
let ul = '';
let li = '';


rest.addEventListener('click', (e) => {
  document.querySelector('#overlay').style.display = "none"
  
});

function getRandomPhraseAsArray() {
  dis = phrases[ranNum];
  return dis;
};

function addPhraseToDisplay(dis) {
 for(let i = 0; i < dis.length; i++)  {
  if(dis[i] === ' ') {
    ul = document.getElementById("phrase");
    li = document.createElement('li');
    li.innerHTML = dis[i];
    ul.appendChild(li);
    li.classList.add('space');
 
  } else {
    ul = document.getElementById("phrase");
    li = document.createElement('li');
    li.innerHTML = dis[i];
    ul.appendChild(li);
    li.classList.add('letter');
  
  };
 
 };
};
getRandomPhraseAsArray();
addPhraseToDisplay(dis);


function checkLetter(clicked) {
  let match = null; 
  let letter = document.querySelectorAll('.letter');
  let li = document.querySelectorAll('li');
  for(let i = 0; i < letter.length; i++) {
 
    
    if(dis[i] == clicked) {
      li[i].classList.add('show');
      match = clicked;
      console.log('worked');
      console.log(dis[i]);
      console.log(clicked);
      
      
    } else {
     console.log('no');
    };
  };
  return match;
};

qwerty.addEventListener('click', (e) => {
  
  if(e.target.tagName === 'BUTTON' && e.target.className != 'chosen') {
   e.target.classList.add('chosen');
   let clicked = e.target;
    if(1 == true) {

    
      checkLetter(clicked.textContent);
      console.log()
    };
  } else {

    console.log('nope')

  };
 
}); 



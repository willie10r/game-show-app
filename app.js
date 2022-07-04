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
    console.log('space');
    console.log(dis[i]);
  } else {
    ul = document.getElementById("phrase");
    li = document.createElement('li');
    li.innerHTML = dis[i];
    ul.appendChild(li);
    li.classList.add('letter');
    console.log('letter');
    console.log(dis[i]);
  };
 
 };
};

function checkLetter(clicked) {

  let match = null; 
  for(let i = 0; i < dis.length; i++) {
    let li_var = li;
    if(li_var = clicked) {
      console.log('worked');
      console.log(li_var);
      console.log(dis[i]);
      
    } else {
      console.log('nope');
    };
};

};

getRandomPhraseAsArray();
addPhraseToDisplay(dis);
checkLetter();

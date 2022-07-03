const key = document.querySelector('#qwerty');
const phr =  document.querySelector('#phrase');
const rest = document.querySelector('.btn__reset');
let missed = 0;
let phrases = ['pit stop', 'enginebrake', 'starting gird', 'paddock', 'parabolica'];
let ranNum = Math.floor(Math.random()*5);
let dis = '';

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
    let ul = document.getElementById("phrase");
    let li = document.createElement('li');
    li.innerHTML = dis[i];
    ul.appendChild(li);
    li.classList.add('space');
    console.log('space');
    console.log(dis[i]);
  } else {
    let ul = document.getElementById("phrase");
    let li = document.createElement('li');
    li.innerHTML = dis[i];
    ul.appendChild(li);
    li.classList.add('letter');
    console.log('letter');
    console.log(dis[i]);
  };
 
 };
};
addPhraseToDisplay(dis)
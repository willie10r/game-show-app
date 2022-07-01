const key = document.querySelector('#qwerty');
const phr =  document.querySelector('#phrase');
const rest = document.querySelector('.btn__reset');
let missed = 0;
let phrases = ['apex', 'enginebrake', 'gird', 'paddock', 'parabolica'];
let ranNum = Math.floor(Math.random()*5);

rest.addEventListener('click', () => {
  document.querySelector('#overlay').style.display = "none"
  console.log(phrases[ranNum]);
});

function getRandomPhraseAsArray() {
  let dis = phrases[ranNum];

return dis;

}

function addPhraseToDisplay() {


}
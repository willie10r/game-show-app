const key = document.querySelector('#qwerty');
const phr =  document.querySelector('#phrase');
const rest = document.querySelector('.btn__reset');
const a_z = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let missed = 0;
let phrases = ['apex', 'enginebrake', 'gird', 'paddock', 'parabolica'];
let ranNum = Math.floor(Math.random()*5);


rest.addEventListener('click', () => {
  document.querySelector('#overlay').style.display = "none"
  
});

function getRandomPhraseAsArray() {
  let dis = phrases[ranNum];

return dis;

}
console.log(getRandomPhraseAsArray());


function addPhraseToDisplay(a_z) {
 for(i = 0)  {
  
  let li = document.createElement('li')

 }

}
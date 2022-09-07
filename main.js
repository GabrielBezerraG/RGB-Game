import newGame from "./js-modules/newGame.js";

export { levelButtons, currentMode, game };

const body = document.querySelector('body');
const reset = document.querySelector('[data-reset]');
const modeButton = document.querySelector('[data-mode-button]');
const modeMenu = document.querySelector('[data-mode-menu]');
const levelButtons = document.querySelectorAll('[data-level]');
const game = document.querySelector('[data-game]');

const modes = ['Easy', 'Medium', 'Hard'];
let currentMode = 'Medium';


levelButtons.forEach((level, index) => {
   level.addEventListener('click', ()=> {
      currentMode = modes[index];
      newGame();
   })
})

reset.addEventListener('click', ()=> {
   newGame();
});

modeButton.addEventListener('click', ()=> {
   modeMenu.classList.toggle('levels--hidden');
});

body.addEventListener('click', e => {
   const path = e.composedPath();
   if (!path.includes(modeMenu) && !path.includes(modeButton)) {
      modeMenu.classList.add('levels--hidden')
   }
});

newGame();


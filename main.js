const body = document.querySelector('body');
const reset = document.querySelector('[data-reset]');
const scoreElement = document.querySelector('[data-score]');
const modeButton = document.querySelector('[data-mode-button]');
const modeMenu = document.querySelector('[data-mode-menu]');
const levelButtons = document.querySelectorAll('[data-level]');
const [easy, medium, hard] = levelButtons;
const tooltip = document.querySelector('[data-tooltip');
const game = document.querySelector('[data-game]');
const background = document.querySelector('[data-background]');
const titleColor = document.querySelector('[data-color]');

const modes = ['Easy', 'Medium', 'Hard'];
let currentMode = 'Medium';
let colors = [];
let newColor;
let chosenColor;
let score = 0;

function createBlock() {
   const block = document.createElement('span');
   block.setAttribute('data-block', '');
   block.classList.add('color-block');

   const color = newRgbColor();

   if( addColor() ) {
      colors.push(newColor);
      block.style.backgroundColor = color;
      guessColor(block);
      game.appendChild(block);
   } else {
      createBlock();
   }
}

function guessColor(block) {
   block.addEventListener('click', (e)=> {
      const blocks = document.querySelectorAll('[data-block]');
      if (blocks[chosenColor] == e.target) {
         const chosenColorRgb = colors[chosenColor];
         background.style.backgroundColor = `rgb(${chosenColorRgb},0.5)`;
         showTooltip("Well done! +1 point");
         score++;
         newGame();
      } else {
         showTooltip("Wrong, try again!");
      }
   })
}

function showTooltip(text) {
   tooltip.classList.remove('tooltip--transition');
   tooltip.classList.remove('tooltip--hidden');
   tooltip.innerText = text;
   setTimeout(()=> {
      tooltip.classList.add('tooltip--transition');
      tooltip.classList.add('tooltip--hidden');  
   }, 750)
}


function addColor() {
   let canBeAdded = true;

   const redValues = colors.map(color => color[0]);
   const greenValues = colors.map(color => color[1]);
   const blueValues = colors.map(color => color[2]);

   verifyRgbValues(redValues, 0);
   verifyRgbValues(greenValues, 1);
   verifyRgbValues(blueValues, 2);

   function verifyRgbValues(rgbArray, index) {
      rgbArray.forEach(value => {
         const subtraction = Math.abs(newColor[index] - value);
         if (subtraction <= 10) canBeAdded = false;
      });
   }

   return canBeAdded;
}

function newRgbColor() {
   const rgbValue = () => Math.round(Math.random()*255);
   newColor = [rgbValue(), rgbValue(), rgbValue()]
   return `rgb(${newColor})`;
}

function newGame() {
   styleLevels();
   scoreElement.innerText = `Score: ${score}`;
   colors = [];
   game.innerHTML = '';
   let number = checkMode(); 
   while (number > 0) {
      createBlock();
      number--;
   } 

   chosenColor = Math.round(Math.random() * (checkMode() - 1));
   
   titleColor.innerText = `Color: (${colors[chosenColor][0]}, ${colors[chosenColor][1]}, ${colors[chosenColor][2]})`
}

function checkMode() {
   if (currentMode == 'Easy') return 3;
   else if (currentMode == 'Medium') return 6;
   else if (currentMode == 'Hard') return 9;
}

function styleLevels() {
   levelButtons.forEach((level, index) => {
      level.classList.remove('level--active');
      if (levelButtons[index].value == currentMode) {
         levelButtons[index].classList.add('level--active');
         return
      }
   });

}

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


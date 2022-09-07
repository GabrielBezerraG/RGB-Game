import newGame, { chosenColor, colors } from "./newGame.js";
import showTooltip from "./showTooltip.js";

export { score };

const background = document.querySelector('[data-background]');
let score = 0;


export default function guessColor(block) {
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
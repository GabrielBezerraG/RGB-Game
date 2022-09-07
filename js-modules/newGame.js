import { game } from "../main.js";
import { score } from "./guessColor.js";
import checkMode from "./checkMode.js";
import createBlock from "./createBlock.js";
import styleLevelButtons from "./styleLevelButtons.js";

export { colors, chosenColor }

const scoreElement = document.querySelector('[data-score]');
const titleColor = document.querySelector('[data-color]');

let chosenColor;
let colors = [];

export default function newGame() {
   styleLevelButtons();
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
import { colors } from "./newGame.js";
import guessColor from "./guessColor.js";
import newRgbColor, { newColor } from "./newRgbColor.js";
import { game } from "../main.js";
import addColor from "./addColor.js";

export default function createBlock() {
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
import { colors } from "./newGame.js";
import { newColor } from "./newRgbColor.js";

export default function addColor() {
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
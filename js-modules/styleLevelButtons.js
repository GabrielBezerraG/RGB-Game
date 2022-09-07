import { currentMode, levelButtons } from "../main.js";

export default function styleLevelButtons() {
   levelButtons.forEach((level, index) => {
      level.classList.remove('level--active');
      if (levelButtons[index].value == currentMode) {
         levelButtons[index].classList.add('level--active');
         return
      }
   })
};
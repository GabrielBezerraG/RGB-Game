import { currentMode } from "../main.js";

export default function checkMode() {
   if (currentMode == 'Easy') return 3;
   else if (currentMode == 'Medium') return 6;
   else if (currentMode == 'Hard') return 9;
};
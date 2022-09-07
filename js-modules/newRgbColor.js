export { newColor };

let newColor;

export default function newRgbColor() {
   const rgbValue = () => Math.round(Math.random()*255);
   newColor = [rgbValue(), rgbValue(), rgbValue()]
   return `rgb(${newColor})`;
}
const tooltip = document.querySelector('[data-tooltip');

export default function showTooltip(text) {
   tooltip.classList.remove('tooltip--transition');
   tooltip.classList.remove('tooltip--hidden');
   tooltip.innerText = text;
   setTimeout(()=> {
      tooltip.classList.add('tooltip--transition');
      tooltip.classList.add('tooltip--hidden');  
   }, 750)
};
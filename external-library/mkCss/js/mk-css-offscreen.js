let offscreen = document.querySelector('.offscreen')
let offscreenToggler = document.querySelectorAll('.offscreen-toggler');


 offscreenToggler.forEach((toggler)=>{
 let offscreenElement = toggler.dataset.mkTarget;
 let offscreenTarget = document.querySelector(offscreenElement);
 
 
 
 let display = false; 
 if (offscreenTarget.classList.contains('offscreen-bottom')) {
  offscreenTarget.classList.add('offscreen-false-bottom')
 } else if (offscreenTarget.classList.contains('offscreen-top')) {
  offscreenTarget.classList.add('offscreen-false-top')
 } else if (offscreenTarget.classList.contains('offscreen-start')) {
 offscreenTarget.classList.add('offscreen-false-start')
 } else if (offscreenTarget.classList.contains('offscreen-end')) {
 offscreenTarget.classList.add('offscreen-false-end')
 }
 
 toggler.addEventListener('click', ()=>{
  if (display === false ) {
   display = true;

   if (offscreenTarget.classList.contains('offscreen-bottom')) {
    offscreenTarget.classList.remove('offscreen-false-bottom');
    offscreenTarget.classList.add('offscreen-true-bottom');
   } else if (offscreenTarget.classList.contains('offscreen-top')) {
    offscreenTarget.classList.remove('offscreen-false-top');
    offscreenTarget.classList.add('offscreen-true-top');
   } else if (offscreenTarget.classList.contains('offscreen-start')) {
    offscreenTarget.classList.remove('offscreen-false-start');
    offscreenTarget.classList.add('offscreen-true-start');
   } else if (offscreenTarget.classList.contains('offscreen-end')) {
    offscreenTarget.classList.remove('offscreen-false-end');
    offscreenTarget.classList.add('offscreen-true-end');
   }
  } else{
   display = false;
 
   if (offscreenTarget.classList.contains('offscreen-bottom')) {
    offscreenTarget.classList.remove('offscreen-true-bottom');
    offscreenTarget.classList.add('offscreen-false-bottom');
   } else if (offscreenTarget.classList.contains('offscreen-top')){
    offscreenTarget.classList.remove('offscreen-true-top');
    offscreenTarget.classList.add('offscreen-false-top');
   } else if (offscreenTarget.classList.contains('offscreen-start')){
    offscreenTarget.classList.remove('offscreen-true-start');
    offscreenTarget.classList.add('offscreen-false-start');
   } else if (offscreenTarget.classList.contains('offscreen-end')){
    offscreenTarget.classList.remove('offscreen-true-end');
    offscreenTarget.classList.add('offscreen-false-end');
   }
  };
 });
 
  let exitButton = offscreenTarget.querySelector('.offscreen-exit');  
  
 exitButton.addEventListener('click', ()=>{
  display = false
  if (offscreenTarget.classList.contains('offscreen-bottom')) {
    offscreenTarget.classList.remove('offscreen-true-bottom');
    offscreenTarget.classList.add('offscreen-false-bottom');
   } else if (offscreenTarget.classList.contains('offscreen-top')){
    offscreenTarget.classList.remove('offscreen-true-top');
    offscreenTarget.classList.add('offscreen-false-top');
   } else if (offscreenTarget.classList.contains('offscreen-start')){
    offscreenTarget.classList.remove('offscreen-true-start');
    offscreenTarget.classList.add('offscreen-false-start');
   } else if (offscreenTarget.classList.contains('offscreen-end')){
    offscreenTarget.classList.remove('offscreen-true-end');
    offscreenTarget.classList.add('offscreen-false-end');
   }
 }) 
 
 
});

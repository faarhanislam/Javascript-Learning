'use strict';
let model = document.querySelector('.modal');
let overlay = document.querySelector('.overlay');
let openBtn = document.querySelectorAll('.show-modal');
let closeBtn = document.querySelector('.close-modal');

function closeButton() {
  model.classList.add('hidden');
  overlay.classList.add('hidden');
}
function openButton() {
  model.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
for (let i = 0; i < openBtn.length; i++)
  openBtn[i].addEventListener('click', openButton);

closeBtn.addEventListener('click', closeButton);
overlay.addEventListener('click', closeButton);

document.addEventListener('keydown', function (e) {
  //   console.log(e.key);
  if (e.key === 'Escape' && !model.classList.contains('hidden')) {
    closeButton();
  }
});

import './style/main.scss';

import postForm from './scripts/post-form.js';
import renderWorkDescription, {
  countWorkItems,
} from './scripts/render-work-description.js';
import burgerMenu from './scripts/burger-menu.js';
import greetingAnimation from './scripts/greeting-animation.js';
import renderWorkItems from './scripts/render-work-items.js';

const containerWorkItems = document.querySelector('.my-works__container');
const nextWorkItem = document.querySelector('.work-description__btn-next');
const prevWorkItem = document.querySelector('.work-description__btn-prev');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.nav__burger-menu');
const navigation = document.querySelector('.nav__list--header');
const modalWindow = document.querySelector('.modal-window');
let countSlide = 0;

postForm();
renderWorkDescription();
burgerMenu();
greetingAnimation();
renderWorkItems();

nextWorkItem.addEventListener('click', () => {
  countSlide += 1;
  if (countSlide > countWorkItems) countSlide = 0;
  renderWorkDescription(countSlide);
});

prevWorkItem.addEventListener('click', () => {
  countSlide -= 1;
  if (countSlide < 0) countSlide = countWorkItems;
  renderWorkDescription(countSlide);
});

containerWorkItems.addEventListener('click', (el) => {
  const curElem = el.target.closest('div.work-item');
  const id = Number(curElem.dataset.id);
  countSlide = id;
  renderWorkDescription(id);
});

overlay.addEventListener('click', () => {
  overlay.classList.add('overlay--hidden');
  menu.classList.remove('nav__burger-menu--open');
  navigation.classList.remove('nav__list--open');
  modalWindow.remove('modal-window--open');
});

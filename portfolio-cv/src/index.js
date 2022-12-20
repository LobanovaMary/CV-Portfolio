import './style/main.scss';

import postForm from './scripts/post-form.js';
import renderWorkItems from './scripts/render-work-items.js';
import burgerMenu from './scripts/burger-menu.js';
import greetingAnimation from './scripts/greeting-animation.js';

postForm();
renderWorkItems();
burgerMenu();
greetingAnimation();

const nextWorkItem = document.querySelector('.work-description__btn-next');
const prevWorkItem = document.querySelector('.work-description__btn-prev');

nextWorkItem.addEventListener('click', () => renderWorkItems(1));
prevWorkItem.addEventListener('click', () => renderWorkItems(0));

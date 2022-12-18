import './style/main.scss';

import postForm from './scripts/post-form.js';
import renderWorkItems from './scripts/render-work-items.js';
import burgerMenu from './scripts/burgerMenu.js';

postForm();
renderWorkItems();
burgerMenu();

const nextWorkItem = document.querySelector('.work-description__btn-next');
const prevWorkItem = document.querySelector('.work-description__btn-prev');

nextWorkItem.addEventListener('click', () => renderWorkItems(1));
prevWorkItem.addEventListener('click', () => renderWorkItems(0));

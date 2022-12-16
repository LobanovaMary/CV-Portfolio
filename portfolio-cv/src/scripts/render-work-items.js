import data from './work-items.js';

const renderWorkItems = (index = 0) => {
  const container = document.querySelector('.my-works__slider-container');
  container.innerHTML = '';
  container.innerHTML = ` <div class="work-description__wrapper">
  <h3 class="work-description__title">${data[index].title}</h3>
    <div class="work-description__content">
    ${data[index].description}
    </div>
    </div>
  <div class="work-description__img-wrapper">
    <img class="work-description__img" src="${data[index].imgPath}" alt="${data[index].title}">
  </div>
  </div>
 `;
};

export default renderWorkItems;

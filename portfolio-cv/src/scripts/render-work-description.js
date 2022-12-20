import data from './work-items.js';
export const countWorkItems = data.length - 1;

const renderWorkDescription = (index = 0) => {
  const container = document.querySelector('.my-works__slider-container');
  container.innerHTML = '';
  container.innerHTML = ` <div class="work-description__wrapper">
  <h3 class="work-description__title">${data[index].title}</h3>
    <div class="work-description__content">
    ${data[index].description}
    <a href='${data[index].deployLink}'>Посмотреть сайт</a>
    </div>
    </div>
  <div class="work-description__img-wrapper">
    <img class="work-description__img" src="${data[index].imgPath}" alt="${data[index].title}">
  </div>
  </div>
 `;
};

export default renderWorkDescription;

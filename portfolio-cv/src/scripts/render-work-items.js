import data from './work-items.js';

const renderWorkItems = () => {
  const container = document.querySelector('.my-works__container');
  const html = data
    .map((el, id) => {
      const icon = el.iconPath
        ? `<img class="work-item__icon" src="${el.iconPath}" alt="${el.altIcon}">
    </div>`
        : '';
      return ` <div class="work-item" data-id=${id}>
    <img class="work-item__img" src="${el.imgPath}" alt="${el.title}">
    <div class="work-item__description">
      <h4 class="work-item__title">${el.title}</h4>
     ${icon} 
  </div>`;
    })
    .join(' ');
  container.innerHTML = html;
};

export default renderWorkItems;

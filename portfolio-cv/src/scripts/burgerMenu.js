const burgerMenu = () => {
  const menu = document.querySelector('.nav__burger-menu');
  const navigation = document.querySelector('.nav__list--header');
  const openCloseMenu = () => {
    menu.classList.toggle('nav__burger-menu--open');
    navigation.classList.toggle('nav__list--open');
  };
  menu.addEventListener('click', openCloseMenu);
  navigation.addEventListener('click', openCloseMenu);
};

export default burgerMenu;

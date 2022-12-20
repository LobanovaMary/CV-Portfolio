const burgerMenu = () => {
  const menu = document.querySelector('.nav__burger-menu');
  const navigation = document.querySelector('.nav__list--header');
  const overlay = document.querySelector('.overlay');

  const openCloseMenu = () => {
    menu.classList.toggle('nav__burger-menu--open');
    navigation.classList.toggle('nav__list--open');
    console.log(window.innerWidth);
    if (window.innerWidth <= 700) overlay.classList.toggle('overlay--hidden');
  };

  menu.addEventListener('click', openCloseMenu);
  navigation.addEventListener('click', openCloseMenu);
};

export default burgerMenu;

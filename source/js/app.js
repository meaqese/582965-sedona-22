const mainNavigation = document.querySelector(`.main-nav`);
const openNavigationButton = document.querySelector(`.header__open-button`);
const closeNavigationButton = mainNavigation.querySelector(`.main-nav__close-button`);

const closeNavigation = () => {
  mainNavigation.classList.add(`main-nav--closed`);

  closeNavigationButton.removeEventListener(`click`, closeNavigation);
};

openNavigationButton.addEventListener(`click`, () => {
  mainNavigation.classList.toggle(`main-nav--closed`);

  closeNavigationButton.addEventListener(`click`, closeNavigation);
});

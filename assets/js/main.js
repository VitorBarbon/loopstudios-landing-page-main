function isActiveHamburguer() {
  const button = document.querySelector('.button__hamburguer');
  const nav = document.querySelector('.header__nav');
  const header = document.querySelector('.header');

  function setClass(class1, class2, class3, class4) {
    nav.classList.add(class1);
    nav.classList.remove(class2);
    header.classList.add(class3);
    header.classList.remove(class4);
  }

  document.addEventListener('click', e => {
    const element = e.target;

    if (element.classList.contains('fa-bars')) {
      setClass('is-active', 'is-hidden', 'header-mobile', 'header');
      button.innerHTML = '<i class="fa fa-times"></i>';

    } else if (element.classList.contains('fa-times')) {
      setClass('is-hidden', 'is-active', 'header', 'header-mobile');
      button.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

  });
}
isActiveHamburguer();
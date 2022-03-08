function alterar() {
  document.getElementById('div1').classList.add('sia');
}

const containerButtons = document.querySelector('.c-buttons');
const divElements = containerButtons.querySelectorAll('div');

document.addEventListener('click', e => {
  const el = e.target;

  for (let divElement of divElements) {
    let id = divElement.getAttribute('id');

    if (el.getAttribute('id') === id) {
      console.log(``);
      el.style.backgroundColor = 'blue';
    }
  }
});
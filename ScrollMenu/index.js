//li du menu accordeon
const tagMarkPeugeot = document.querySelector('#MARKPEUGEOT');
const tagMarkRenault = document.querySelector('#MARKRENAULT');
const tagMarkAudi = document.querySelector('#MARKAUDI');
const tagMarkBmw = document.querySelector('#MARKBMW');

//deplacement souris sur li peugeot
tagMarkPeugeot.addEventListener('mouseover', () => {
  const children = tagMarkPeugeot.childNodes;
  children[1].classList.add('list_active');
});
tagMarkPeugeot.addEventListener('mouseout', () => {
  const children = tagMarkPeugeot.childNodes;
  children[1].classList.remove('list_active');
});

//deplacement souris sur li renault
tagMarkRenault.addEventListener('mouseover', () => {
  const children = tagMarkRenault.childNodes;
  children[1].classList.add('list_active');
});
tagMarkRenault.addEventListener('mouseout', () => {
  const children = tagMarkRenault.childNodes;
  children[1].classList.remove('list_active');
});

//deplacement souris sur li audi
tagMarkAudi.addEventListener('mouseover', () => {
  const children = tagMarkAudi.childNodes;
  children[1].classList.add('list_active');
});
tagMarkAudi.addEventListener('mouseout', () => {
  const children = tagMarkAudi.childNodes;
  children[1].classList.remove('list_active');
});

//deplacement souris sur li bmw
tagMarkBmw.addEventListener('mouseover', () => {
  const children = tagMarkBmw.childNodes;
  children[1].classList.add('list_active');
});
tagMarkBmw.addEventListener('mouseout', () => {
  const children = tagMarkBmw.childNodes;
  children[1].classList.remove('list_active');
});

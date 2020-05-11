let SeeDetailRose = (btn, secModal, artModal, rose) => {
  secModal.classList.toggle('section_modal_active');
  if (btn.classList.contains('btn_detail_rose_1')) {
    CreateComponentRose(artModal, rose);
  }
};

export default SeeDetailRose;

let CreateComponentRose = (x, y) => {
  //construction titre
  const title = document.createElement('h3');
  const textTitle = document.createTextNode(y.name);
  title.appendChild(textTitle);

  //construction sous titre
  const subtitle = document.createElement('P');
  const textSubtitle = document.createTextNode(y.summarize);
  subtitle.appendChild(textSubtitle);

  //construction detail
  const detail = document.createElement('p');
  const textDetail = document.createTextNode(y.detail);
  detail.appendChild(textDetail);

  //construction denomination
  const denomination = document.createElement('p');
  const textDenomination = document.createTextNode(y.denomination);
  denomination.appendChild(textDenomination);

  //construction obtender
  const obtender = document.createElement('p');
  const textObtender = document.createTextNode(y.obtender);
  obtender.appendChild(textObtender);

  //construction flowertype
  const flowerType = document.createElement('p');
  const textflowerType = document.createTextNode(y.flowertype);
  flowerType.appendChild(textflowerType);

  //construction resistancevirus
  const resistanceVirus = document.createElement('p');
  const textResistanceVirus = document.createTextNode(y.resistancevirus);
  resistanceVirus.appendChild(textResistanceVirus);

  //affectation des divs creer à l'article modal
  x.insertAdjacentElement('beforeend', title);
  x.insertAdjacentElement('beforeend', subtitle);
  x.insertAdjacentElement('beforeend', detail);
  x.insertAdjacentElement('beforeend', denomination);
  x.insertAdjacentElement('beforeend', obtender);
  x.insertAdjacentElement('beforeend', flowerType);
  x.insertAdjacentElement('beforeend', resistanceVirus);
};

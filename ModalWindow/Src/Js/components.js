//supprime les elements creer dans le modal pour en reafficher au besoin
let RemoveElement = (x, y) => {
  x.removeChild(y);
};

//creation des elements dans la section modal
let SeeDetailRose = (x, y) => {
  //construction contenaire
  const container = document.createElement('div');
  container.className = 'div_container';

  //construction titre
  const title = document.createElement('h3');
  const textTitle = document.createTextNode(y.name);
  title.appendChild(textTitle);
  title.className = 'title_modal';

  //construction sous titre
  const subtitle = document.createElement('P');
  const textSubtitle = document.createTextNode(y.summarize);
  subtitle.appendChild(textSubtitle);
  subtitle.className = 'subtile_modal';

  //construction detail
  const detail = document.createElement('p');
  const textDetail = document.createTextNode(y.detail);
  detail.appendChild(textDetail);
  detail.className = 'detail_modal';

  //construction denomination
  const denomination = document.createElement('p');
  const textDenomination = document.createTextNode(y.denomination);
  denomination.appendChild(textDenomination);
  denomination.className = 'denomination_modal';

  //construction obtender
  const obtender = document.createElement('p');
  const textObtender = document.createTextNode(y.obtender);
  obtender.appendChild(textObtender);
  obtender.className = 'obtender_modal';

  //construction flowertype
  const flowerType = document.createElement('p');
  const textflowerType = document.createTextNode(y.flowertype);
  flowerType.appendChild(textflowerType);
  flowerType.className = 'flowerType_modal';

  //construction resistancevirus
  const resistanceVirus = document.createElement('p');
  const textResistanceVirus = document.createTextNode(y.resistancevirus);
  resistanceVirus.appendChild(textResistanceVirus);
  resistanceVirus.className = 'resistance_modal';

  //affectation des divs creer à l'article modal
  container.insertAdjacentElement('beforeend', title);
  container.insertAdjacentElement('beforeend', subtitle);
  container.insertAdjacentElement('beforeend', detail);
  container.insertAdjacentElement('beforeend', denomination);
  container.insertAdjacentElement('beforeend', obtender);
  container.insertAdjacentElement('beforeend', flowerType);
  container.insertAdjacentElement('beforeend', resistanceVirus);

  x.insertAdjacentElement('beforeend', container);
};

export { SeeDetailRose, RemoveElement };

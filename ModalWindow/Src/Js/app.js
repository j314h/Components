import {
  BERNADETTE_LAFONT,
  LEO_FERRE,
  ISABELLE_AUTISSIER,
  LE_GRAND_HUIT,
  SWEET_LOVE,
  MICHEL_FUGAIN,
} from './list_roses.js';
import { SeeDetailRose, RemoveElement } from './components.js';

//btn des cadres de fleurs
const btnDetailRose1 = document.querySelector('.btn_detail_rose_1');
const btnDetailRose2 = document.querySelector('.btn_detail_rose_2');
const btnDetailRose3 = document.querySelector('.btn_detail_rose_3');
const btnDetailRose4 = document.querySelector('.btn_detail_rose_4');
const btnDetailRose5 = document.querySelector('.btn_detail_rose_5');
const btnDetailRose6 = document.querySelector('.btn_detail_rose_6');

//partie modale
const sectionModal = document.querySelector('.section_modal');
const articleModal = document.querySelector('.article_modal');

//click btn detail -------------------------------------
btnDetailRose1.onclick = () => {
  const sectionModal = document.querySelector('.section_modal');

  sectionModal.classList.add('section_modal_active');

  SeeDetailRose(articleModal, BERNADETTE_LAFONT);
};

btnDetailRose2.onclick = () => {
  const sectionModal = document.querySelector('.section_modal');

  sectionModal.classList.add('section_modal_active');

  SeeDetailRose(articleModal, LEO_FERRE);
};

btnDetailRose3.onclick = () => {
  const sectionModal = document.querySelector('.section_modal');

  sectionModal.classList.add('section_modal_active');

  SeeDetailRose(articleModal, ISABELLE_AUTISSIER);
};

btnDetailRose4.onclick = () => {
  const sectionModal = document.querySelector('.section_modal');

  sectionModal.classList.add('section_modal_active');

  SeeDetailRose(articleModal, LE_GRAND_HUIT);
};

btnDetailRose5.onclick = () => {
  const sectionModal = document.querySelector('.section_modal');

  sectionModal.classList.add('section_modal_active');

  SeeDetailRose(articleModal, SWEET_LOVE);
};

btnDetailRose6.onclick = () => {
  const sectionModal = document.querySelector('.section_modal');

  sectionModal.classList.add('section_modal_active');

  SeeDetailRose(articleModal, MICHEL_FUGAIN);
};

//click sur la section modal pour desactiver la section modal
sectionModal.onclick = () => {
  const containerModal = document.querySelector('.div_container');
  const sectionModal = document.querySelector('.section_modal');

  if (sectionModal.classList.contains('section_modal_active')) {
    sectionModal.classList.remove('section_modal_active');
    RemoveElement(articleModal, containerModal);
  }
};

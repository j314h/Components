import {
  BERNADETTE_LAFONT,
  LEO_FERRE,
  ISABELLE_AUTISSIER,
  LE_GRAND_HUIT,
  SWEET_LOVE,
  MICHEL_FUGAIN,
} from './list_roses.js';
import { SeeDetailRose, RemoveElement } from './components.js';

const btnDetailRose1 = document.querySelector('.btn_detail_rose_1');
const sectionModal = document.querySelector('.section_modal');
const articleModal = document.querySelector('.article_modal');
const containerModal = document.querySelector('.div_container');

btnDetailRose1.onclick = () => {
  sectionModal.classList.add('section_modal_active');
  SeeDetailRose(articleModal, BERNADETTE_LAFONT);
};

sectionModal.onclick = () => {
  if (sectionModal.classList.contains('section_modal_active')) {
    sectionModal.classList.remove('section_modal_active');
    RemoveElement(articleModal, containerModal);
  }
};

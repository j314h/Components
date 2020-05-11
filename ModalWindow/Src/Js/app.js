import {
  BERNADETTE_LAFONT,
  LEO_FERRE,
  ISABELLE_AUTISSIER,
  LE_GRAND_HUIT,
  SWEET_LOVE,
  MICHEL_FUGAIN,
} from './list_roses.js';
import SeeDetailRose from './components.js';

const btnDetailRose1 = document.querySelector('.btn_detail_rose_1');
const sectionModal = document.querySelector('.section_modal');
const articleModal = document.querySelector('.article_modal');

btnDetailRose1.onclick = () => {
  SeeDetailRose(btnDetailRose1, sectionModal, articleModal, BERNADETTE_LAFONT);
};

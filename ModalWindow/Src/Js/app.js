import BERNADETTE_LAFONT from 'list_roses.js';

const btnDetailRose1 = document.querySelector('.btn_detail_rose_1');

let SeeDetailRose = (x) => {
  console.log(x);
};

btnDetailRose1.onclick = () => {
  SeeDetailRose(BERNADETTE_LAFONT);
};

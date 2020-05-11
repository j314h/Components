//constructor object rose
class ROSE {
  constructor(n, s, d, de, o, f, r) {
    this.name = n;
    this.summarize = s;
    this.detail = d;
    this.denomination = de;
    this.obtender = o;
    this.flowertype = f;
    this.resistancevirus = r;
  }
}

//object rose 1
let BERNADETTE_LAFONT = new ROSE();
BERNADETTE_LAFONT.name = 'Bernadette Lafont';
BERNADETTE_LAFONT.summarize = 'Très parfumé et idéal pour bouquet. Très jolie rose rose.';
BERNADETTE_LAFONT.detail =
  'Rosier de petite taille aux fleurs très parfumées, très utilisées en fleurs coupées.' +
  'Fleurs de 10cm de diamètres très riche en pétales. Port buissonnant.';
BERNADETTE_LAFONT.denomination = 'Sauvachild';
BERNADETTE_LAFONT.obtender = 'Sauvageot';
BERNADETTE_LAFONT.flowertype = 'Hybride de thé';
BERNADETTE_LAFONT.resistancevirus = 'Oui';

//object rose 2
let LEO_FERRE = new ROSE();
LEO_FERRE.name = 'Léo Ferré';
LEO_FERRE.summarize =
  'Grosses roses de 12 à 14cm de diamètre. Rosier parfumé, rosier remontant.' +
  'Très original car bicolore.';
LEO_FERRE.detail =
  'Original et florifère, ce rosier fleurira de mai à octobre par vagues successives.' +
  'Compact, il sutilise volontiers en massif et vous fournira dexcellentes fleurs à couper de 12 à 14cm de diamètre pour vos bouquets.';
LEO_FERRE.denomination = 'Adabiterse';
LEO_FERRE.obtender = 'Adam';
LEO_FERRE.flowertype = 'Hybride de thé';
LEO_FERRE.resistancevirus = 'Très remontant';

//object rose 3
let ISABELLE_AUTISSIER = new ROSE();
ISABELLE_AUTISSIER.name = 'Isabelle Autissier';
ISABELLE_AUTISSIER.summarize =
  'une très jolie rose rose au coeur jaune. Rose parfumée, parfum intense !';
ISABELLE_AUTISSIER.detail =
  'Un rosier buisson très vigoureux et florifère à la forme arrondie et aux nombreuses tiges érigées portant chacune une rose de 8 à 12cm de diamètre.' +
  'Parfum puissant et fruité. Les fleurs tiennent 10 jours en vase. Résistant aux maladies.';
ISABELLE_AUTISSIER.denomination = 'Adasilthé';
ISABELLE_AUTISSIER.obtender = 'Adam';
ISABELLE_AUTISSIER.flowertype = 'grande fleur double de thé';
ISABELLE_AUTISSIER.resistancevirus = 'Remontant';

//object rose 4
let LE_GRAND_HUIT = new ROSE();
LE_GRAND_HUIT.name = 'Le grand huit';
LE_GRAND_HUIT.summarize =
  'rosier rouge magnifique que ce rosier grande fleur très parfumé et primé !';
LE_GRAND_HUIT.detail =
  'Le grand huit ou grande classe est un rosier à la couleur rouge velouté excaptionnelle qui fleurit de juin à octobre. Son port est érigé ce qui permet de réaliser de beaux bouquets.' +
  'Rosier récompensé pour son parfum fruité très puissant. Rosier robuste et florifère. Son feuillage change de couleur, passant du rouge pruine au vert foncé' +
  'Plusieurs fois primé, ce rosier buisson est vigoureux et compact. Chaque tige produit 2 boutons qui deviendront des roses de 10 à 12cm de diamètre. Très résistant aux maladies. Parfum capiteux très puissant. Fleurs à couper.';
LE_GRAND_HUIT.denomination = 'Adharman';
LE_GRAND_HUIT.obtender = 'Adam';
LE_GRAND_HUIT.flowertype = 'Hybride de thé';
LE_GRAND_HUIT.resistancevirus = 'Très remontan';

//object rose 5
let SWEET_LOVE = new ROSE();
SWEET_LOVE.name = 'Sweet love';
SWEET_LOVE.summarize = 'rosier crème, très parfumé et résistant aux maladies.';
SWEET_LOVE.detail =
  'Rosier buisson très parfumé et résistant aux maladies. Grandes fleurs doubles idéales pour fleurs coupées.';
SWEET_LOVE.denomination = 'Harmisty';
SWEET_LOVE.obtender = 'Harkness';
SWEET_LOVE.flowertype = 'Grande fleur double';
SWEET_LOVE.resistancevirus = 'Remontant';

//object rose 6
let MICHEL_FUGAIN = new ROSE();
MICHEL_FUGAIN.name = 'Michel Fugain';
MICHEL_FUGAIN.summarize =
  'Il est peut-être plus discret, car moins parfumé, mais tout aussi abondant';
MICHEL_FUGAIN.detail =
  "Je souhaitais une rose jaune, qui exprime l'amitié tel l'a souhaité Michel Fugain." +
  "C'est sur un rosier buisson que naissent de jolis boutons jaunes qui éclosent en grandes roses jaunes." +
  "Ces roses Michel Fugain raviront tous les amateurs de roses qui souhaitent une floraison de mai jusqu'aux gelées";
MICHEL_FUGAIN.denomination = 'Guimifug';
MICHEL_FUGAIN.obtender = 'Guillot';
MICHEL_FUGAIN.flowertype = 'Hybride de thé';
MICHEL_FUGAIN.resistancevirus = 'Très remontant';

export {
  BERNADETTE_LAFONT,
  LEO_FERRE,
  ISABELLE_AUTISSIER,
  LE_GRAND_HUIT,
  SWEET_LOVE,
  MICHEL_FUGAIN,
};

/**

 * Liens de navigation statiques (sans catalogue formations lourd).

 * Le sous-menu Domaine d'expertise est chargé dynamiquement via navdata-mega.js.

 */

import { ressourcesNavSubmenu } from './ressources.js';

export const EXPERTISE_NAV_LABEL = "Domaine d'expertise";



export const navlinksStatic = [

  {

    label: "Le groupe",

    href: "/a-propos",

    /*

    submenu: [

      {

        label: "À propos",

        href: "/a-propos",

        image: "/assets/images/rejoindre.jpg",

        description: "Notre histoire, nos valeurs et notre mission chez Nexytal.",

      },

      {

        label: "Entreprise",

        href: "/entreprise",

        image: "/assets/images/entreprise.jpg",

        description: "Solutions sur mesure et accompagnement pour les organisations.",

      },

      {

        label: "Nous rejoindre",

        href: "/nous-rejoindre",

        image: "/assets/images/emploi.jpg",

        description: "Rejoignez l'équipe Nexytal et participez à nos projets.",

      },

    ],

    */

  },

  {

    label: EXPERTISE_NAV_LABEL,

    href: "/expertises",

    /*

    megaMenu: true,

    lazySubmenu: true,

    */

  },

  {

    label: "Ressources",

    href: "/ressources",

    submenu: ressourcesNavSubmenu,

  },

  { label: "Implantations", href: "/implantations" },

  { label: "Contact", href: "/contact" },

  // { label: "FAQ", href: "/faq" },

];



/** Charge le module méga-menu (JSON formations) à la demande. */

let megaCache = null;

export async function loadNavMegaData() {

  if (megaCache) return megaCache;

  megaCache = await import('./navdata-mega.js');

  return megaCache;

}



/** navlinks complets avec sous-menu expertises (après chargement lazy). */

export async function getFullNavlinks() {

  const mega = await loadNavMegaData();

  return mega.navlinks;

}


